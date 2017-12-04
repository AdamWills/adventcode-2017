var assert = require('assert');
const day3 = require('../day-3/day3');

describe('Day 3', function () {

  describe('Helper functions', ()=>{
    it('should get the closest prime number', () => {
      assert.equal(1, day3.getClosestOddPrime(1));
      assert.equal(3, day3.getClosestOddPrime(9));
      assert.equal(5, day3.getClosestOddPrime(10));
      assert.equal(5, day3.getClosestOddPrime(23));
      assert.equal(5, day3.getClosestOddPrime(25));
    });
    // it('should get the correct ring number', () => {
    //   assert.equal(1, day3.getRingNumber(1));
    //   assert.equal(2, day3.getRingNumber(9));
    //   assert.equal(3, day3.getRingNumber(25));
    // });
    it('should get the distance from the center', () => {
      assert.equal(2, day3.getDistanceFromCenter(13, 5));
      assert.equal(1, day3.getDistanceFromCenter(14, 5));
      assert.equal(0, day3.getDistanceFromCenter(15, 5));
      assert.equal(1, day3.getDistanceFromCenter(16, 5));
      assert.equal(2, day3.getDistanceFromCenter(17, 5));
      assert.equal(1, day3.getDistanceFromCenter(18, 5));
      assert.equal(1, day3.getDistanceFromCenter(24, 5));
    });
  });

  describe('Testing results A', () => {
    it('should calculate the Manhattan Distance', () => {
      assert.equal(0, day3.getManhattanDistance(1));
      assert.equal(3, day3.getManhattanDistance(14));
      assert.equal(2, day3.getManhattanDistance(23));
      assert.equal(31, day3.getManhattanDistance(1024));
    });
  });

});