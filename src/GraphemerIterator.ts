import Graphemer from './Graphemer';

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

  constructor(str: string) {
    this._str = str;
  }

  [Symbol.iterator]() {
    return this;
  }

  next() {
    let brk;
    if (
      (brk = Graphemer.nextBreak(this._str, this._index)) < this._str.length
    ) {
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
