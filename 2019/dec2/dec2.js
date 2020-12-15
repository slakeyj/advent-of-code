/*
position 0 = 1: add
position 0 = 2: multiply
position 0 = 99: end of program
position 1 and 2: indicate index of numbers to add or multiply
position 3: indicates index of where output is to be stored

*/

const restoreGravityAssist = input => {
  for (let i = 0; i < input.length; i++) {
    if (input[i] === 99) {
      break;
    }
    let firstInput = input[input[i + 1]];
    let secondInput = input[input[i + 2]];
    let outputPosition = input[i + 3];
    if (input[i] === 1) {
      input[outputPosition] = firstInput + secondInput;
    }
    if (input[i] === 2) {
      input[outputPosition] = firstInput * secondInput;
    }
    i += 3;
  }
  return input[0];
};

module.exports = restoreGravityAssist;
