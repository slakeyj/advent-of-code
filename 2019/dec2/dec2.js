/*
position 0 = 1: add
position 0 = 2: multiply
position 0 = 99: end of program
position 1 and 2: indicate index of numbers to add or multiply
position 3: indicates index of where output is to be stored

*/

const restoreGravityAssist = (input, noun, verb) => {
  let newInput = [...input];
  newInput[1] = noun;
  newInput[2] = verb;
  for (let i = 0; i < newInput.length; i++) {
    if (input[i] === 99) {
      break;
    }
    let firstInput = newInput[newInput[i + 1]];
    let secondInput = newInput[newInput[i + 2]];
    let outputPosition = newInput[i + 3];
    if (newInput[i] === 1) {
      newInput[outputPosition] = firstInput + secondInput;
    }
    if (newInput[i] === 2) {
      newInput[outputPosition] = firstInput * secondInput;
    }
    i += 3;
  }
  return newInput[0];
};

const findCorrectOutput = (input, output) => {
  let newInput = [...input];
  for (let noun = 0; noun <= 99; noun++) {
    for (let verb = 0; verb <= 99; verb++) {
      if (restoreGravityAssist(newInput, noun, verb) === output) {
        return 100 * noun + verb;
      }
    }
  }
};

module.exports = { restoreGravityAssist, findCorrectOutput };
