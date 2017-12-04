const getClosestOddPrime = x => {
  const nextPrime = Math.ceil(Math.sqrt(x));
  return (nextPrime % 2 === 0) ? nextPrime + 1 : nextPrime;
};

const getRingNumber = x => (x + 1) / 2;

const getDistanceFromCenter = (x, ringSize) =>
  Math.abs(((Math.pow(ringSize,2) - x) % (ringSize - 1)) - Math.floor(ringSize / 2));

const getManhattanDistance = input => {
  if (input === 1) return 0;
  const ringSize = getClosestOddPrime(input);
  const ringNumber = getRingNumber(ringSize);
  return (ringNumber - 1) + getDistanceFromCenter(input, ringSize);
}

module.exports = {
  getClosestOddPrime,
  getRingNumber,
  getDistanceFromCenter,
  getManhattanDistance,
};
