const findMass = (module) => {
  return Math.floor(module / 3) - 2;
};

const sumOfFuelRequirements = (input) => {
  return input.reduce((acc, curr) => {
    let mass = findMass(curr);
    return acc + mass;
  }, 0);
};

const findFuelRequirementsForAll = (input) => {
  let allMasses = input.map((module) => {
    let mass = findMass(module);
    let total = 0;

    while (mass > 0) {
      // console.log('in while', mass);
      total += mass;
      mass = findMass(mass);
    }
    return total;
  });
  console.log('all masses', allMasses);

  return allMasses.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
};

module.exports = { sumOfFuelRequirements, findFuelRequirementsForAll };
