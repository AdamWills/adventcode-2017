const getLineElements = line => line.split(/[ ,\t]+/).filter(n => n);
const reducer = (sum, x) => sum + x;
const findDivisors = (sum, x, i, arr) => {
  arr.forEach(el => {
    if (x !== el && x % el === 0) {
      sum = (x / el);
    }
  });
  return sum;
}

const getLineTotal = (line) => {
  const arr = getLineElements(line);
  return Math.max(...arr) - Math.min(...arr);
}

const getLineTotalB = line => getLineElements(line).reduce(findDivisors, 0);

const getChecksumA = input =>
  input
  .split('\n')
  .map(getLineTotal)
  .reduce(reducer);

const getChecksumB = input =>
  input
  .split('\n')
  .map(getLineTotalB)
  .reduce(reducer);

module.exports = {
  getChecksumA,
  getChecksumB
}