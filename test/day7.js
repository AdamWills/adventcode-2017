var assert = require('assert');
const day7 = require('../day-7/day7');

const input = `pbga (66)
xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)`;

describe('Day 7', function () {

  it('tests halpert functions', () => {
    const testInput = `fwft (72) -> ktlj, cntj, xhth`;
    const result = day7.parseLine(testInput);
    assert.equal('fwft', result[1]);
    assert.equal('72', result[3]);
    const result2 = day7.parseData(testInput);
  });


  it('should test part B', () => {

  })
});
