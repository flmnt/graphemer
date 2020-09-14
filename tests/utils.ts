function ucs2encode(array: number[]): string {
  return array
    .map((value) => {
      let output = '';

      if (value > 0xffff) {
        value -= 0x10000;
        output += String.fromCharCode(((value >>> 10) & 0x3ff) | 0xd800);
        value = 0xdc00 | (value & 0x3ff);
      }

      output += String.fromCharCode(value);
      return output;
    })
    .join('');
}

export function testDataFromLine(
  line: string,
): { input: string; expected: string[] } {
  const codePoints = line.split(/\s*[×÷]\s*/).map((c) => parseInt(c, 16));
  const input = ucs2encode(codePoints);

  const expected = line.split(/\s*÷\s*/).map((sequence) => {
    const codePoints = sequence.split(/\s*×\s*/).map((c) => parseInt(c, 16));
    return ucs2encode(codePoints);
  });

  return { input, expected };
}
