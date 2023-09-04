import { Abi } from './abi.js';
import { stdlib } from './index.js';
import * as std from './std/index.js';
import { Auth, Value, WithAbiOptions, WithoutAbiOptions } from './types.js';
import { AbiReader, AbiWriter } from './io.js';
import { sha256hex } from './crypto/index.js';

const DEFAULT_URL = new URL(globalThis.location?.origin ?? 'http://localhost:8080');

const debugLogger = (status: number, method: string, params?: Value[], value?: unknown) => {
  if (process.env['NODE_ENV'] && process.env['NODE_ENV'] !== 'production') {
    const bg =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      status >= 400 ? '#e8590c' : '#1983c1';
    console.log(
      '%cGreyCat',
      `background:${bg};color:#fff;padding:2px;font-weight:bold`,
      method,
      params,
      value,
    );
  }
};

export class GreyCat {
  /** GreyCat's api endpoint normalized (does not contain a trailing slash) */
  readonly api: string;
  /** The current GreyCat ABI */
  readonly abi: Abi;
  /** used by `WriteBuffer` to initialize its capacity */
  readonly capacity: number;
  /** used when making authenticated requests */
  token: string | undefined;
  /** called when a request returns a status code 401 */
  unauthorizedHandler: (() => void) | undefined;

  private constructor(
    api: string,
    abi: Abi,
    capacity = 2048,
    token?: string,
    unauthorizedHandler?: () => void,
  ) {
    this.api = api;
    this.abi = abi;
    this.capacity = capacity;
    this.token = token;
    this.unauthorizedHandler = unauthorizedHandler;
  }

  /**
   * Initializes a GreyCat RPC client using the given `options.url`.
   *
   * This method is asynchronous as we need to download the server ABI in order to serialize/deserialize the future requests.
   *
   * *If the `auth` property is given, a first call to `runtime::User::login` will be made before anything else.*
   *
   * *For `libraries`, specifying `stdlib` is not required as it will always be loaded by default.*
   *
   * @param options
   * @returns a GreyCat instance to initiate call requests to the backend.
   * @throws on IO and ABI parse errors
   */
  static async init(
    {
      url = DEFAULT_URL,
      libraries = [stdlib],
      capacity,
      signal,
      auth,
      unauthorizedHandler,
    }: WithoutAbiOptions = { url: DEFAULT_URL },
  ): Promise<GreyCat> {
    if (libraries.indexOf(stdlib) === -1) {
      // ensures 'stdlib' is always loaded
      libraries.push(stdlib);
    }
    const cleanUrl = normalizeUrl(url);

    let token: string | undefined;
    if (auth) {
      token = await login({ ...auth, url, signal });
    }

    const abiReqOpts: RequestInit = { method: 'POST', signal };
    if (token) {
      abiReqOpts.headers = {
        Authorization: token,
      };
    }
    const method = 'runtime::Runtime::abi';
    const res = await fetch(`${cleanUrl}/${method}`, abiReqOpts);
    if (res.status === 401) {
      // unauthorized
      debugLogger(res.status, method);
      // call handler if any
      unauthorizedHandler?.();
      throw new Error(`you need to be logged-in to access '${method}'`);
    } else if (!res.ok) {
      throw new Error(`unable to fetch ABI (${res.status} ${res.statusText})`);
    }
    const data = await res.arrayBuffer();
    const abi = new Abi(data, libraries);
    return new GreyCat(cleanUrl, abi, capacity, token, unauthorizedHandler);
  }

  static initWithAbi({
    url = DEFAULT_URL,
    capacity,
    abi,
    token,
    unauthorizedHandler,
  }: WithAbiOptions): GreyCat {
    return new GreyCat(normalizeUrl(url), abi, capacity, token, unauthorizedHandler);
  }

  /**
   * Calls the specified `method` on the current GreyCat instance.
   * Serializes the parameters as ABI-compliant binary and deserializes the response body into a `Value`.
   *
   * The generic param `T` is there only for convenience as no runtime checks are made on the deserialized value.
   *
   * @param method the exposed endpoint to call, without leading slash
   * (eg. `'runtime/User/me'`)
   * @param params a list of parameters to send for the call
   * @param signal an optional `AbortSignal` to cancel the underlying fetch call
   */
  async call<T = unknown>(method: string, params?: Value[], signal?: AbortSignal): Promise<T> {
    const url = `${this.api}/${method}`;
    const writer = new AbiWriter(this.abi, this.capacity);
    writer.headers();
    if (params && params.length > 0) {
      for (let i = 0; i < params.length; i++) {
        writer.serialize(params[i]);
      }
    }
    const headers: HeadersInit = {
      accept: 'application/octet-stream',
      'content-type': 'application/octet-stream',
    };
    if (this.token) {
      headers['Authorization'] = this.token;
    }
    const res = await fetch(url, {
      method: 'POST',
      body: writer.buffer,
      headers,
      signal,
    });
    if (res.status >= 200 && res.status < 300) {
      const data = await res.arrayBuffer();
      const value = this.deserializeWithHeader(data);
      debugLogger(res.status, method, params, value);
      return value as T;
    } else if (res.status === 401) {
      // unauthorized
      debugLogger(res.status, method, params);
      // reset token
      this.token = undefined;
      // call handler if any
      this.unauthorizedHandler?.();
      throw new Error(`you need to be logged-in to access '${method}'`);
    } else if (res.status === 403) {
      // forbidden
      debugLogger(res.status, method, params);
      throw new Error(`access to '${method}' is forbidden`);
    } else if (res.status === 404) {
      // not found
      debugLogger(res.status, method, params, null);
      throw new Error(`unknown method '${method}'`);
    }
    const data = await res.arrayBuffer();
    const value = this.deserializeWithHeader(data);
    const err = value as std.core.Error;
    debugLogger(res.status, method, params, data);
    throw new Error(
      `calling '${method}' failed with code ${err.code} and message "${err.msg.length > 0 ? err.msg : err.value?.toString()
      }"`,
    );
  }

  /**
   * Serializes the given `value` into ABI-compliant binary format.
   *
   * *If you want to re-use the write buffer, to reduce allocations, use `AbiWriter` directly*
   */
  serialize(value: Value): Uint8Array {
    const writer = new AbiWriter(this.abi, this.capacity);
    writer.serialize(value);
    return writer.buffer;
  }

  /**
   * Deserializes one value from the given `ArrayBuffer`.
   */
  deserialize(data: ArrayBuffer): Value {
    return new AbiReader(this.abi, data).deserialize();
  }

  /**
   * Deserializes ABI headers, then deserializes one value from the given `ArrayBuffer`.
   */
  deserializeWithHeader(data: ArrayBuffer): Value {
    return new AbiReader(this.abi, data).deserializeWithHeaders();
  }

  /**
   * Downloads a file from GreyCat.
   *
   * Deserializes the content of the file based on the extension:
   *
   *  - `.json`: deserializes the payload as JSON
   *  - `.gcb`: deserializes the payload as GreyCat instance if `filepath` ends with `.gcb`, returns the `ArrayBuffer` otherwise
   *  - `others`: returns the payload as a string
   *
   * @param filepath eg. `path/to/file` *(do not include `/files/` in the path)*
   * @param signal optional `AbortSignal` to cancel the request prematurely
   * @returns
   */
  async getFile<T = unknown>(filepath: string, signal?: AbortSignal): Promise<T> {
    const route = `files/${filepath}`;
    const res = await fetch(`${this.api}/${route}`, { signal });
    if (res.ok) {
      debugLogger(res.status, route);
      if (filepath.endsWith('.json')) {
        return res.json();
      } else if (filepath.endsWith('.gcb')) {
        const data = await res.arrayBuffer();
        return this.deserialize(new Uint8Array(data)) as T;
      }
      return res.text() as T;
    }
    if (res.status === 404) {
      debugLogger(res.status, route);
      throw new Error(`file '${filepath}' not found`);
    } else if (res.status === 403) {
      // forbidden
      debugLogger(res.status, route);
      throw new Error(`file '${filepath}' access forbidden`);
    } else if (res.status === 401) {
      // unauthorized
      debugLogger(res.status, route);
      this.token = undefined;
      this.unauthorizedHandler?.();
      throw new Error(`you must be logged-in to access files`);
    }
    throw new Error(`unexpected error while getting file '${filepath}'`);
  }

  /**
   * Uploads a file to GreyCat.
   *
   * @param filepath eg. `path/to/file` *(do not include `/files/` in the path)*
   * @param file the file to upload
   * @param signal optional `AbortSignal` to cancel the request prematurely
   */
  async putFile(filepath: string, file: File, signal?: AbortSignal): Promise<void> {
    const route = `files/${filepath}`;
    const res = await fetch(`${this.api}/${route}`, {
      method: 'PUT',
      body: file,
      signal,
    });
    if (res.ok) {
      return;
    }
    if (res.status === 404) {
      debugLogger(res.status, route);
      throw new Error(`file '${filepath}' not found`);
    } else if (res.status === 403) {
      // forbidden
      debugLogger(res.status, route);
      throw new Error(`file '${filepath}' access forbidden`);
    } else if (res.status === 401) {
      // unauthorized
      debugLogger(res.status, route);
      this.token = undefined;
      this.unauthorizedHandler?.();
      throw new Error(`you must be logged-in to access files`);
    }
    throw new Error(`unexpected error while getting file '${filepath}'`);
  }

  /**
   * Constructs a non-native type by resolving the AbiType from its fqn and passing in the attributes values
   * @param name non-native type fqn (eg. 'runtime::User')
   * @param attributes
   * @returns
   */
  create(name: string, attributes: Value[]) {
    return this.abi.create(name, attributes);
  }

  createGeo(lat: number, lng: number) {
    return this.abi.createGeo(lat, lng);
  }

  createTime(value: bigint | number) {
    return this.abi.createTime(typeof value === 'bigint' ? value : BigInt(value));
  }

  createDuration(value: bigint | number) {
    return this.abi.createDuration(typeof value === 'bigint' ? value : BigInt(value));
  }
}

export type LoginOptions = Auth & {
  url?: URL;
  signal?: AbortSignal;
};

/**
 * 
 * @param {LoginOptions} opts
 * @returns the user token
 */
export async function login({
  username,
  password,
  use_cookie = false,
  url = DEFAULT_URL,
  signal,
}: LoginOptions): Promise<string> {
  const credentials = btoa(`${username}:${sha256hex(password)}`);
  const body = JSON.stringify([credentials, use_cookie]);
  const res = await fetch(`${normalizeUrl(url)}/runtime::User::login`, {
    method: 'POST',
    body,
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    signal,
  });

  if (res.ok) {
    return (await res.json()) as string;
  }
  throw new Error(`unable to login (${res.status} ${res.statusText})`);
}

export type LogoutOptions = {
  url?: URL;
  signal?: AbortSignal;
};

/**
 * @param {LogoutOptions} opts
 */
export async function logout({ url = DEFAULT_URL, signal }: LogoutOptions = {}): Promise<void> {
  const res = await fetch(`${normalizeUrl(url)}/runtime::User::logout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    signal,
  });
  if (res.ok) {
    return;
  }
  throw new Error(`unable to logout (${res.status} ${res.statusText})`);
}

function normalizeUrl(url: URL): string {
  let end = url.href.length - 1;
  while (url.href[end] === '/') {
    end -= 1;
  }
  return url.href.slice(0, end + 1);
}
