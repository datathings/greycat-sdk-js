import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType, Value } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class Queue extends GCObject {
  static readonly _type = 'util::Queue' as const;

  constructor(type: AbiType, readonly queue: LinkedList<Value> = new LinkedList()) {
    super(type);
  }

  pushBack(v: Value): void {
    this.queue.pushBack(v);
  }
  pushFront(v: Value): void {
    this.queue.pushFront(v);
  }
  popBack(): Value | null {
    return this.queue.popBack();
  }
  popFront(): Value | null {
    return this.queue.popFront();
  }
  size(): number {
    return this.queue.size();
  }

  override save(w: AbiWriter): void {
    w.write_u8(PrimitiveType.object);
    w.write_u32(this.type.offset);

    const size = this.queue.size();
    const size_n = BigInt(size);
    w.write_i64(size_n);
    w.write_u32(size);
    w.write_u32(size);
    w.write_i64(size_n);
    w.write_i64(0n);

    for (const v of this.queue) {
      w.serialize(v);
    }
  }

  static load(r: AbiReader, type: AbiType): Queue {
    /* const width = */ r.read_i64();
    const size = r.read_u32();
    const capacity = r.read_u32();
    /* const head =  */ r.read_i64();
    /* const tail =  */ r.read_i64();

    const queue = new LinkedList();

    let i = 0;
    for (i = 0; i < size; i++) {
      queue.pushBack(r.deserialize());
    }
    for (; i < capacity; i++) {
      r.deserialize(); // read empty slots to reach capacity
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new type.factory!(type, queue) as Queue;
  }
}

class Node<T> {
  constructor(public data: T, public prev: Node<T> | null = null, public next: Node<T> | null = null) {}
}

class LinkedList<T> {
  head: Node<T> | null = null;
  tail: Node<T> | null = null;

  pushBack(v: T): void {
    const node = new Node(v);
    if (this.tail === null) {
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail.next = node;
    node.prev = this.tail;
  }

  pushFront(v: T): void {
    const node = new Node(v);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }

    const oldHead = this.head;
    this.head = node;
    this.head.prev = null; // defensive
    this.head.next = oldHead;
    oldHead.prev = this.head;
  }

  popBack(): T | null {
    if (this.tail === null) {
      return null;
    }

    const oldTail = this.tail;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.tail = oldTail.prev!;
    this.tail.next = null;

    return oldTail.data;
  }

  popFront(): T | null {
    if (!this.head) {
      return null;
    }
    const oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = null;

    if (oldHead === this.tail) {
      this.tail = this.head;
    }

    return oldHead.data;
  }

  size(): number {
    if (this.head == null) {
      return 0;
    }

    let n = 0;
    let last: Node<T> | null = this.head;
    while (last != null) {
      n++;
      last = this.head.next;
    }

    return n;
  }

  [Symbol.iterator]() {
    let head = this.head;
    return {
      next() {
        if (head === null) {
          return { done: true, value: null };
        }
        const value = head.data;
        head = head.next;
        return { done: false, value };
      },
      return() {
        return { done: true, value: null };
      },
    };
  }
}
