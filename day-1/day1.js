const reducerA = (sum, val, index, arr) => {
    return isNextValueEqual(index, arr) ? sum + val : sum;
}

const reducerB = (sum, val, index, arr) => {
    return isOppositeValueEqual(index, arr) ? sum + val : sum;
}

const isNextValueEqual = (index, arr) => {
    const nextIndex = index === (arr.length - 1) ? 0 : index + 1;
    return arr[index] === arr[nextIndex];
}

const isOppositeValueEqual = (index, arr) =>{
    const oppositeIndex = (arr.length / 2) + index;
    return arr[index] === arr.concat(arr)[oppositeIndex];
}

const calculateA = (input) => {
    return input
        .split('')
        .map(x => parseInt(x))
        .reduce(reducerA, 0);
}

const calculateB = (input) => {
    return input
        .split('')
        .map(x => parseInt(x))
        .reduce(reducerB, 0);
}

module.exports = {
    calculateA,
    calculateB,
    isNextValueEqual,
    isOppositeValueEqual
}
