const findMass = (module) => {
  return Math.floor(module / 3) - 2;
};

const sumOfFuelRequirements = (input) => {
  return input.reduce((acc, curr) => {
    let mass = findMass(curr);
    return acc + mass;
  }, 0);
};

module.exports = sumOfFuelRequirements;
