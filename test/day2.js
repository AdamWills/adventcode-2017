var assert = require('assert');
const day2 = require('../day-2/day2');

describe('Day 2', function () {

  describe('Testing checksum A', () => {
    const input = `5 1 9 5
    7 5 3
    2 4 6 8`;
    assert.equal(18, day2.getChecksumA(input));
  });

  describe('Testing checksum B', () => {
    const input = `5 9 2 8
    9 4 7 3
    3 8 6 5`;
    assert.equal(9, day2.getChecksumB(input));
  });

});