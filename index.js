const day1Input = require('./day-1/input');
const day2Input = require('./day-2/input');
const day1 = require('./day-1/day1');
const day2 = require('./day-2/day2')

console.log('Day 1 - Part A: ', day1.calculateA(day1Input));
console.log('Day 1 - Part B: ', day1.calculateB(day1Input));
console.log('Day 2 - Part A: ', day2.getChecksumA(day2Input));
console.log('Day 2 - Part B: ', day2.getChecksumB(day2Input));