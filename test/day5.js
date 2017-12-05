var assert = require('assert');
const day5 = require('../day-5/day5');

const maze = `0
3
0
1
-3`.split('\n').map(x => parseInt(x));;

describe('Day 5', function () {

  describe('', ()=>{
    it('tests halpert functions', () => {
      assert.equal(4, day5.increment(3));
      assert.equal(3, day5.increment(2, true));
      assert.equal(2, day5.increment(3, true));
    });
    it('should test part A', () => {
      const input = `0
      3
      0
      1
      -3`;
      const maze = input.split('\n').map(x => parseInt(x));
      assert.equal(5, day5.doMaze(maze));
    });
    it('should test part B', () => {
      const input = `0
      3
      0
      1
      -3`;
      const maze = input.split('\n').map(x => parseInt(x));
      assert.equal(10, day5.doMaze(maze, true));
    })
  });
});
