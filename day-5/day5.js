const fs = require('fs');

const getData = (file) => fs.readFileSync(file).toString().split('\n').map(x => parseInt(x));

const increment = (x, isPartB = false) => {
  return isPartB ? (x >= 3 ? x - 1 : x + 1) : x + 1;
}

const doMaze = (maze, partB = false) => {
  let nextStep, numberOfSteps = 0, currentIndex = 0;
  do {
    nextStep = currentIndex + maze[currentIndex];
    maze[currentIndex] = increment(maze[currentIndex], partB);
    currentIndex = nextStep;
    numberOfSteps++;
  } while ( currentIndex < maze.length );
  return numberOfSteps;
}

module.exports = {
  doMaze,
  getData,
  increment
}