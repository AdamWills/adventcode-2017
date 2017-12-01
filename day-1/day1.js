const reducer = (sum, val, index, arr) => {
    return isNextValueEqual(index, arr) ? sum + val : sum;
}

const isNextValueEqual = (index, arr) => {
    const nextIndex = index === (arr.length - 1) ? 0 : index + 1;
    return arr[index] === arr[nextIndex];
}

const calculate = (input) => {
    return input
        .split('')
        .map(x => parseInt(x))
        .reduce(reducer, 0);
}

module.exports = {
    calculate,
    isNextValueEqual
}
