var assert = require('assert');
const day1 = require('../day-1/day1');

describe('Day 1', function () {

    describe('Testing Next Array', () => {
        it('should determine if the next value is equal', () => {
            assert.equal(true, day1.isNextValueEqual(0, [1, 1]));
            assert.equal(false, day1.isNextValueEqual(0, [1, 2]));
            assert.equal(true, day1.isNextValueEqual(1, [1, 3, 3]));
        });
        it('should wrap values for the end', () => {
            assert.equal(true, day1.isNextValueEqual(1, [1,1]));
            assert.equal(false, day1.isNextValueEqual(1, [2, 1]));
        });

    });

    describe('Test data', () => {
        it('should return the correct answers', () => {
            assert.equal(3, day1.calculate('1122'));
            assert.equal(4, day1.calculate('1111'));
            assert.equal(0, day1.calculate('1234'));
            assert.equal(9, day1.calculate('91212129'));
        });
    })
});
