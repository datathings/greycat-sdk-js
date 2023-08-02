import { Abi } from './abi.js';
import { stdlib } from './index.js';
import * as std from './std/index.js';
import { Value, WithAbiOptions, WithoutAbiOptions } from './types.js';
import { AbiReader, AbiWriter } from './io.js';

export class GreyCat {
  /** GreyCat's api endpoint normalized (does not contain a trailing slash) */
  readonly api: string;
  /** The current GreyCat ABI */
  readonly abi: Abi;
  /** used by `WriteBuffer` to initialize its capacity */
  readonly capacity: number;

  private constructor(api: string, abi: Abi, capacity = 2048) {
    this.api = api;
    this.abi = abi;
    this.capacity = capacity;
  }

  /**
   * Initializes a GreyCat RPC client using the given `options.url`.
   *
   * This method is asynchronous as we need to download the server ABI in order to serialize/deserialize the future requests.
   * @param options
   * @returns a GreyCat instance to initiate call requests to the backend.
   * @throws on IO and ABI parse errors
   */
  static async init({ url, libraries = [stdlib], capacity, signal }: WithoutAbiOptions): Promise<GreyCat> {
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
    const res = await fetch(url, {
      method: 'POST',
      body: writer.buffer,
      headers: { accept: 'application/octet-stream', 'content-type': 'application/octet-stream' },
      signal,
    });
    if (res.status === 404) {
      const data = await res.json();
      throw new Error(`calling '${method}' failed with message "${data.value}"`);
    }
    const data = await res.arrayBuffer();
    const value = this.deserializeWithHeader(data);
    if (res.status >= 200 && res.status < 300) {
      return value as T;
    }
    const err = value as std.core.Error;
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
