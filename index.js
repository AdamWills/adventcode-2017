const day1Input = require('./day-1/input');
const day2Input = require('./day-2/input');
const day1 = require('./day-1/day1');
const day2 = require('./day-2/day2')
const day3 = require('./day-3/day3');
const day4 = require('./day-4/day4');
const day5 = require('./day-5/day5');

console.log('Day 1 - Part A: ', day1.calculateA(day1Input));
console.log('Day 1 - Part B: ', day1.calculateB(day1Input));
console.log('Day 2 - Part A: ', day2.getChecksumA(day2Input));
console.log('Day 2 - Part B: ', day2.getChecksumB(day2Input));
console.log('Day 3 - Part A: ', day3.getManhattanDistance(325489));
day4.readPasswordFile();
console.log('Day 5 - Part A: ', day5.doMaze(day5.getData('./day-5/input.js')))
console.log('Day 5 - Part A: ', day5.doMaze(day5.getData('./day-5/input.js'), true))