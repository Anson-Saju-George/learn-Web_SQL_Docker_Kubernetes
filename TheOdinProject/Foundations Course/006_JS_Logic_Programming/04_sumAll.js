const sumAll = (arr) => {
  const max = Math.max(...arr);
  const min = Math.min(...arr);
  let sum = 0;
  for (let i = min; i <= max; i++) {
    sum += i;
  }
  return { min, max, sum };
};

const result = sumAll([1, 4]);
console.log(result.min, result.max, result.sum); // Output: 1 4 10
console.log(sumAll([4, 1])); // Output: { min: 1, max: 4, sum: 10 }
