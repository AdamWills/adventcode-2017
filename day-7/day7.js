
const getParentTower = (input) => {
  const towers = input.split('\n');
  const bases = [];
  const stacks = [];
  const regex = /([a-z]+)/g;
  let result;
  for (let index = 0; index < towers.length; index++) {
    const t = towers[index].match(regex);
    if (t.length > 1) {
      bases.push(t[0]);
      for (let j = 1; j < t.length; j++) {
        stacks.push(t[j]);
      }
    }
  }
  return bases.filter(x => !stacks.includes(x))[0];
}

const parseLine = (line) =>
  line.match(/([a-z]+)( \((\d+)\) -> ([a-z ,]+))?/);

const parseData = input => {
  const data = input.split('\n');
  return data.reduce((r, x) => {
    const l = parseLine(x);
    r[l[1]] = l[3];
    return r;
  }, []);
}


/*
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
cntj (57)`;*/

module.exports = {
  getParentTower,
  parseLine,
  parseData
}