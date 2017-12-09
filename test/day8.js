var assert = require('assert');
const day8 = require('../day-8/day8');

describe('Day 8', function () {

  const testInput = `b inc 5 if a > 1
  a inc 1 if b < 5
  c dec -10 if a >= 1
  c inc -20 if c == 10`;

  it('tests halpert functions', () => {
    const p = day8.processData(testInput);
  });


  it('should test part B', () => {
    const val = day8.getLargestValue(testInput);
  })
});
