const countStairs = input => {
  let count = 0;
  let directions = input.split('');
  for (let i = 0; i < directions.length; i++) {
    directions[i] === '(' ? count++ : count--;
    if (count === -1) {
      return i + 1;
    }
  }
  return count;
};

module.exports = countStairs;
