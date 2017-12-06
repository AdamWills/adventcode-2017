var assert = require('assert');
const day6 = require('../day-6/day6');

const getHistory = () => {
  const history = [];
  history.push([0,1,2,3]);
  history.push([4,5,6,7]);
  history.push([8,9,0,1]);
  return history;
}

describe('Day 6', function () {

  describe('', ()=>{
    const testInput = `0	 2	 7	 0`;
    it('tests halpert functions', () => {
      assert.deepEqual([0,2,7,0], day6.parseData(testInput));
      assert.equal(true, day6.isArrayEqual([1,2,3], [1,2,3]));
      assert.equal(false, day6.isArrayEqual([1,2,3], [1,2,4]));
      assert.equal(1, day6.maxIndex([4,8,3,0,4,2, 8]));
      assert.deepEqual([1,1,2,2], day6.redistribute(1, [0,6,0,0]));

    });
    it('should test part A', () => {
      assert.equal(5, day6.reallocate(testInput))
    });
    it('should test part B', () => {
      assert.equal(4, day6.reallocateLoop(testInput))
    })
  });
});
