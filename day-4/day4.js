const readLine = require('readline');
const file = require('fs');

const isPasswordValid = (password) => {
  const passwordArr = password.split(' ');
  for (let i = 0, len = passwordArr.length; i < len; i++) {
    for (let j = 0, lenB = passwordArr.length; j < lenB; j++) {
      if ( i !== j && isAnagram(passwordArr[i], passwordArr[j])) {
        return false;
      }
    }
  }
  return true;
}

const isAnagram = (a, b) => {
  const A = a.split('').sort().join('');
  const B = b.split('').sort().join('');
  return a.split('').sort().join('') === b.split('').sort().join('')
};

const readPasswordFile = () => {
  var lineReader = readLine.createInterface({
    input: file.createReadStream(__dirname + '/input.js')
  });
  let validPasswords = 0;

  lineReader.on('line', function (line) {
    if (isPasswordValid(line)) {
      validPasswords = validPasswords + 1;
    }
  });
  lineReader.on('close', () => {
    console.log('Day 4 - Part A: ', validPasswords);
  })
};

module.exports = {
  isPasswordValid,
  readPasswordFile,
  isAnagram
}