const parseLine = line => line.match(/(\S+) ([a-z]+) (-?\d+) if (([a-z]+).+)/);

const processData = (raw) => {
  return raw.split('\n').reduce( (arr, val) => {
    const line = parseLine(val);
    arr.push({
      block: line[1],
      dir: line[2],
      steps: parseInt(line[3]),
      criteria: line[4],
      blockToCompare: line[5]
    });
    return arr;
  }, []);
}

const getMax = obj => {
  const highestKey = Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b );
  return obj[highestKey];
}

const getLargestValue = (raw) => {
  const instructions = processData(raw);
  const memory = {};
  let max = 0;
  instructions.forEach(step => {
    if (typeof memory[step.block] === 'undefined') {
      memory[step.block] = 0;
    }
    if (typeof memory[step.blockToCompare] === 'undefined') {
      memory[step.blockToCompare] = 0;
    }
    if (eval(`memory.${step.criteria}`)) {
      const operation = (step.dir === 'inc') ? '+' : '-';
      const calc = `${memory[step.block]} ${operation} ${step.steps}`;
      memory[step.block] = eval(calc);
    }
    if (memory[step.block] > max) {
      max = memory[step.block];
    }

  });
  return max;
  //return getMax(memory);
}

module.exports = {
  processData,
  getLargestValue
}