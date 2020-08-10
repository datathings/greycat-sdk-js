export class ExecuteResult {
  _releaseHandler: (() => void) | undefined;
  _resolve: (() => void) | undefined;

  constructor(readonly id: string, readonly data: any = null) {}

  on(event: 'released', cb: () => void) {
    if (event === 'released') {
      this._releaseHandler = cb;
    }
  }
}