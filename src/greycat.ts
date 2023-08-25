import { Abi } from './abi.js';
import { algebralib, stdlib } from './index.js';
import * as std from './std/index.js';
import { Value, WithAbiOptions, WithoutAbiOptions } from './types.js';
import { AbiReader, AbiWriter } from './io.js';
import { sha256hex } from './crypto/index.js';

declare global {
  interface GreyCatGlobal {
    default: GreyCat;
  }

  interface Window {
    greycat: GreyCatGlobal;
  }
}

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

  private constructor(api: string, abi: Abi, capacity = 2048, token?: string, unauthorizedHandler?: () => void) {
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
   * *For `libraries`, specifying `stdlib` and `algebralib` is not required as they will always be loaded by default.*
   * 
   * @param options
   * @returns a GreyCat instance to initiate call requests to the backend.
   * @throws on IO and ABI parse errors
   */
  static async init({ url, libraries = [stdlib, algebralib], capacity, signal, auth, unauthorizedHandler }: WithoutAbiOptions): Promise<GreyCat> {
    if (libraries.indexOf(stdlib) === -1) {
      // ensures 'stdlib' is always loaded
      libraries.push(stdlib);
    }
    if (libraries.indexOf(algebralib) === -1) {
      // ensures 'algebralib' is always loaded
      libraries.push(algebralib);
    }
    const cleanUrl = normalizeUrl(url);

    let token: string | undefined;
    if (auth) {
      const credentials = btoa(`${auth.username}:${sha256hex(auth.password)}`);
      const res = await fetch(
        `${cleanUrl}/runtime::User::login`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify([credentials, auth.use_cookie ?? false]),
          signal
        },
      );
      if (!res.ok) {
        throw new Error(`unable to login (${res.status} ${res.statusText})`);
      }
      token = await res.json();
    }

    const abiReqOpts: RequestInit = { method: 'POST', signal };
    if (token) {
      abiReqOpts.headers = {
        Authorization: token,
      };
    }
    const res = await fetch(`${cleanUrl}/runtime::Runtime::abi`, abiReqOpts);
    if (!res.ok) {
      throw new Error(`unable to fetch ABI (${res.status} ${res.statusText})`);
    }
    const data = await res.arrayBuffer();
    const abi = new Abi(data, libraries);
    return new GreyCat(cleanUrl, abi, capacity, token, unauthorizedHandler);
  }

  static initWithAbi({ url, capacity, abi, token, unauthorizedHandler }: WithAbiOptions): GreyCat {
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
      throw new Error(`You need to be logged-in to access '${method}'`);
    } else if (res.status === 403) {
      // forbidden
      debugLogger(res.status, method, params);
      throw new Error(`Access to '${method}' is forbidden`);
    } else if (res.status === 404) {
      // not found
      const data = await res.json();
      debugLogger(res.status, method, params, data);
      throw new Error(`calling '${method}' failed with message "${data.value}"`);
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
   */
  serialize(value: Value): Uint8Array {
    const writer = new AbiWriter(this.abi, this.capacity);
    writer.serialize(value);
    return writer.buffer;
  }

  // serializeJson(value: unknown, writer = new AbiWriter(this.abi, this.capacity)): Uint8Array {
  //   if (typeof value === 'object') {
  //     if (value === null) {
  //       writer.serialize(null);
  //     } else {
  //       if ('_type' in value && typeof value._type === 'string') {
  //         const type = this.abi.type_by_fqn.get(value._type);
  //         if (!type) {
  //           throw new Error(`cannot serialize unknown type '${value._type}'`);
  //         }
  //         const o = new type.factory!(type, ...attrs);
  //         for (const attr of type.attrs) {
  //           let attr_value: Value;
  //           if (attr.name in value) {
  //             // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //             attr_value = (value as any)[attr.name];
  //           }

  //         }
  //       }
  //     }
  //     throw new Error('not implemented');
  //   }
  //   writer.serialize(value as Value);
  //   return writer.buffer;
  // }

  /**
   * Deserializes one value from the given `ArrayBuffer`.
   */
  deserialize(data: ArrayBuffer): Value {
    return new AbiReader(this.abi, data).deserialize();
  }

  /**
   * Deserializes ABI headers, then
   * deserializes one value from the given `ArrayBuffer`
   */
  deserializeWithHeader(data: ArrayBuffer): Value {
    return new AbiReader(this.abi, data).deserializeWithHeaders();
  }

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

function normalizeUrl(url: URL): string {
  let end = url.href.length - 1;
  while (url.href[end] === '/') {
    end -= 1;
  }
  return url.href.slice(0, end + 1);
}

// export function fromJson(value: string) {
//   return JSON.parse(value, (_, value) => {
//     if (typeof value === 'string' && value.startsWith('$bigint:')) {
//       // eslint-disable-next-line no-undef
//       return BigInt(value.slice(8));
//     }
//     return value;
//   });
// }

// export function toJson(value: Value): string {
//   return JSON.stringify(value, (_, value) => {
//     if (typeof value === 'bigint') {
//       if (value >= Number.MIN_SAFE_INTEGER && value <= Number.MAX_SAFE_INTEGER) {
//         return Number(value);
//       }
//       return `$bigint:${value}`;
//     }
//     return value;
//   });
// }