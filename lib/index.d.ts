export default class Graphemer {
    /**
     * Returns the next grapheme break in the string after the given index
     * @param string {string}
     * @param index {number}
     * @returns {number}
     */
    nextBreak(string: string, index: number): number;
    /**
     * Breaks the given string into an array of grapheme cluster strings
     * @param str {string}
     * @returns {string[]}
     */
    splitGraphemes(str: string): string[];
    /**
     * Returns the iterator of grapheme clusters there are in the given string
     * @param str {string}
     * @returns {Iterator<string|undefined>}
     */
    iterateGraphemes(str: string): Iterator<string | undefined>;
    /**
     * Returns the number of grapheme clusters there are in the given string
     * @param str {string}
     * @returns {number}
     */
    countGraphemes(str: string): number;
    /**
     * Given a Unicode code point, determines this symbol's grapheme break property
     * @param code {number} Unicode code point
     * @returns {number}
     */
    static getGraphemeBreakProperty(code: number): number;
    static getEmojiProperty(code: number): number;
}
//# sourceMappingURL=index.d.ts.map