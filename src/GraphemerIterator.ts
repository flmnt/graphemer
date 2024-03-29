/**
 * GraphemerIterator
 *
 * Takes a string and a "BreakHandler" method during initialisation
 * and creates an iterable object that returns individual graphemes.
 *
 * @param str {string}
 * @return GraphemerIterator
 */
class GraphemerIterator implements Iterator<string> {
  private _index: number = 0;
  private _str: string;
  private _nextBreak: (str: string, index: number) => number;

  constructor(str: string, nextBreak: (str: string, index: number) => number) {
    this._str = str;
    this._nextBreak = nextBreak;
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    let brk;
    if ((brk = this._nextBreak(this._str, this._index)) < this._str.length) {
      const value = this._str.slice(this._index, brk);
      this._index = brk;
      return { value: value, done: false };
    }
    if (this._index < this._str.length) {
      const value = this._str.slice(this._index);
      this._index = this._str.length;
      return { value: value, done: false };
    }
    return { value: undefined, done: true };
  }
}

export default GraphemerIterator;
