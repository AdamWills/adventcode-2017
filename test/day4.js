var assert = require('assert');
const day4 = require('../day-4/day4');

describe('Day 4', function () {

  describe('Catching valid passwords', ()=>{
    it('determine if password is valid', () => {
      // assert.equal(true, day4.isPasswordValid('aa bb cc dd ee'));
      // assert.equal(false, day4.isPasswordValid('aa bb cc dd aa'));
      // assert.equal(true, day4.isPasswordValid('aa bb cc dd aaa'));
    });
    it('should detect anagrams', () => {
      assert.equal(true, day4.isAnagram('abcde','ecdab'));
    })
  });
});
