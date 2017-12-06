
const parseData = (input) =>
  input.split('\t').map(x => parseInt(x.trim()));

const isArrayEqual = (a, b) => a.join('') === b.join('');

const maxIndex = x =>
  x.reduce((max, curr, i, arr) => arr[max] < curr ? i : max, 0);

const redistribute = (i, arr) => {
  let blocksToDistibute = arr[i];
  arr[i] = 0;
  while (blocksToDistibute > 0) {
    i = (i === arr.length - 1) ? 0 : i + 1;
    arr[i]++;
    blocksToDistibute--;
  }
  return arr;
}

const reallocate = (blocks) => {
  let data = parseData(blocks);
  let steps = 0;
  let history = [];
  let reallocatedData = [];
  do {
    history.push(reallocatedData.join(''));
    reallocatedData = redistribute(maxIndex(data), data);
    steps ++;
  } while (steps === 1 || !history.includes(reallocatedData.join('')));
  return steps;
}

const reallocateLoop = (blocks) => {
  let data = parseData(blocks);
  let index = 0;
  let steps = 0;
  let history = [];
  let reallocatedData = [];
  do {
    history.push(reallocatedData.join(''));
    reallocatedData = redistribute(maxIndex(data), data);
    index = history.indexOf(reallocatedData.join(''));
    steps++;
  } while (index !== 1 && !history.includes(reallocatedData.join('')));
  return steps - index;
}

module.exports = {
  parseData,
  isArrayEqual,
  maxIndex,
  redistribute,
  reallocate,
  reallocateLoop
}