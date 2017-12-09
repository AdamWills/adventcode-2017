const day1Input = require('./day-1/input');
const day2Input = require('./day-2/input');
const day7Input = require('./day-7/input');
const day8Input = require('./day-8/input');
const day1 = require('./day-1/day1');
const day2 = require('./day-2/day2')
const day3 = require('./day-3/day3');
const day4 = require('./day-4/day4');
const day5 = require('./day-5/day5');
const day6 = require('./day-6/day6');
const day7 = require('./day-7/day7');
const day8 = require('./day-8/day8');

console.log('Day 1 - Part A: ', day1.calculateA(day1Input));
console.log('Day 1 - Part B: ', day1.calculateB(day1Input));
console.log('Day 2 - Part A: ', day2.getChecksumA(day2Input));
console.log('Day 2 - Part B: ', day2.getChecksumB(day2Input));
console.log('Day 3 - Part A: ', day3.getManhattanDistance(325489));
// day4.readPasswordFile();
console.log('Day 5 - Part A: ', day5.doMaze(day5.getData('./day-5/input.js')))
console.log('Day 5 - Part A: ', day5.doMaze(day5.getData('./day-5/input.js'), true))
console.log('Day 6 - Part A: ', day6.reallocate(`11	11	13	7	0	15	5	5	4	4	1	1	7	1	15	11`));
console.log('Day 6 - Part B: ', day6.reallocateLoop(`11	11	13	7	0	15	5	5	4	4	1	1	7	1	15	11`));
console.log('Day 7 - Part A: ', day7.getParentTower(day7Input));
console.log('Day 8 - Part A: ', day8.getLargestValue(day8Input));