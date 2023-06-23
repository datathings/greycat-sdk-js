import { Abi } from './abi.js';
import { AbiReader, AbiWriter } from './io.js';
import { std } from './std.js';
import { Library, Value } from './types.js';

export interface Options {
  /** URL of the GreyCat server */
  url: URL;
  /**
   * Write buffer capacity. Defaults to `2048` (2KB)
   */
  capacity?: number;
}

export interface WithoutAbiOptions extends Options {
  /** This signal is given to the request that loads the ABI. */
  signal?: AbortSignal;
  /** Libraries to use for (de-)serialization. By default, only "core" is loaded. */
  libraries?: Library[];
}

export interface WithAbiOptions extends Options {
  /** The ABI to use internally */
  abi: Abi;
}

export class GreyCat {
  /** GreyCat's api endpoint normalized (does not contain a trailing slash) */
  private _api: string;
  /** The current GreyCat ABI */
  private _abi: Abi;
  /** used by `WriteBuffer` to initialize its capacity */
  private _capacity: number;

  private constructor(api: string, abi: Abi, capacity = 2048) {
    this._api = api;
    this._abi = abi;
    this._capacity = capacity;
  }

  /**
   * Initializes a GreyCat RPC client using the given `options.url`.
   *
   * This method is asynchronous as we need to download the server ABI in order to serialize/deserialize the future requests.
   * @param options
   * @returns a GreyCat instance to initiate call requests to the backend.
   * @throws on IO and ABI parse errors
   */
  static async init({ url, libraries = [std], capacity, signal }: WithoutAbiOptions): Promise<GreyCat> {
    const cleanUrl = normalizeUrl(url);
    const res = await fetch(`${cleanUrl}/runtime::Runtime::abi`, { method: 'POST', signal });
    const data = await res.arrayBuffer();
    const abi = new Abi(data, libraries);
    return new GreyCat(cleanUrl, abi, capacity);
  }

  static initWithAbi({ url, capacity, abi }: WithAbiOptions): GreyCat {
    return new GreyCat(normalizeUrl(url), abi, capacity);
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
   * @param signal an optional `AbortSignal` to cancel the promise
   */
  async call<T = unknown>(method: string, params?: Value[], signal?: AbortSignal): Promise<T> {
    const url = `${this._api}/${method}`;
    let body: Uint8Array | undefined;
    if (params && params.length > 0) {
      const writer = new AbiWriter(this._abi, this._capacity);
      for (let i = 0; i < params.length; i++) {
        writer.serialize(params[i]);
      }
      body = writer.buffer;
      writer.clear();
    }
    const res = await fetch(url, {
      method: 'POST',
      body,
      headers: { accept: 'application/octet-stream', 'content-type': 'application/octet-stream' },
      signal,
    });
    const data = await res.arrayBuffer();
    return this.deserialize(data) as T;
  }

  /**
   * Serializes the given `value` into ABI-compliant binary format.
   *
   * @param value
   * @returns
   */
  serialize(value: Value): Uint8Array {
    const writer = new AbiWriter(this._abi, this._capacity);
    writer.serialize(value);
    return writer.buffer;
  }

  /**
   * Deserializes one value from the given `ArrayBuffer`.
   *
   * @param data
   * @returns
   */
  deserialize(data: ArrayBuffer): Value {
    return new AbiReader(this._abi, data).deserialize();
  }
}

function normalizeUrl(url: URL): string {
  let end = url.href.length - 1;
  while (url.href[end] === '/') {
    end -= 1;
  }
  return url.href.slice(0, end + 1);
}
