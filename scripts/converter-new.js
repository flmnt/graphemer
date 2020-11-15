const formatCategory = (category) =>
  category === 'Extended_Pictographic'
    ? `${category.toUpperCase()}`
    : `CLUSTER_BREAK.${category.toUpperCase()}`;

const ifTemplate = (condition, category, comment) => `\
//${comment}
if(${condition}) { return ${formatCategory(category)}; }`;

const conditionTemplate = (codepoints) => {
  if (codepoints.length === 1) {
    return `0x${codepoints[0].toString(16)} === code`;
  } else if (codepoints.length === 2) {
    return `0x${codepoints[0].toString(
      16,
    )} <= code && code <= 0x${codepoints[1].toString(16)}`;
  }
  throw new Error(`Unexpected codepoints length: ${codepoints.length}`);
};

function processOneProperty(line) {
  const rangeAndRest = line.split(';');
  if (rangeAndRest.length != 2) {
    console.error('rangeAndRest.lengh != 2: ' + line);
    throw Error('rangeAndRest.lengh != 2: ' + line);
  }
  const category = rangeAndRest[1].split('#')[0].trim();
  const [codepointRange, others] = line.split(';');
  const codepoints = codepointRange
    .trimRight()
    .split('..')
    .map((x) => Number.parseInt(x, 16));
  const comment = others.split('#')[1];
  return {
    range: codepoints,
    category: category,
    comment: comment,
  };
}

const hexDigitsRe = /^[0-9A-F]/i;
function splitPropertyChunk(content) {
  return content.split('\n').filter((line) => hexDigitsRe.test(line));
}

function genTree(ranges) {
  const len = ranges.length;
  if (len === 1) {
    const r = ranges[0];
    let result = ifTemplate(conditionTemplate(r.range), r.category, r.comment);
    return result;
  } else {
    const mid = Math.floor(len / 2);
    const loRange = ranges.slice(0, mid);
    const hiRange = ranges.slice(mid);
    const m = ranges[mid];
    let result = `if (code < 0x${m.range[0].toString(16)}) {
        ${genTree(loRange)}
      } else {
        ${genTree(hiRange)}
      }`;
    return result;
  }
}

function convertNew(content, categoryFilter = () => true) {
  const propertyLines = splitPropertyChunk(content);
  let propertyRecords = propertyLines
    .map((line) => processOneProperty(line))
    .filter((x) => categoryFilter(x.category))
    .sort((a, b) => a.range[0] - b.range[0]);

  const tree = genTree(propertyRecords);
  return `${tree}
    // unlisted code points are treated as a break property of "Other"
    return ${formatCategory('Other')};
  `;
}

module.exports = convertNew;