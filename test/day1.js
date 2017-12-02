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

    describe('Testing opposite array', () => {
        it('should determine if the opposite value is equal', () => {
            assert.equal(true, day1.isOppositeValueEqual(2, [1, 2, 1, 4]));
        });
    });

    describe('Test data', () => {
        it('should return the correct answers', () => {
            assert.equal(3, day1.calculateA('1122'));
            assert.equal(4, day1.calculateA('1111'));
            assert.equal(0, day1.calculateA('1234'));
            assert.equal(9, day1.calculateA('91212129'));
        });
        it('should return the correct answers for part 2', () => {
            assert.equal(6, day1.calculateB('1212'));
            assert.equal(0, day1.calculateB('1221'));
            assert.equal(4, day1.calculateB('123425'));
            assert.equal(12, day1.calculateB('123123'));
            assert.equal(4, day1.calculateB('12131415'));
        });
    })
});
