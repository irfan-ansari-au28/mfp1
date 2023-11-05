// Factorial - 5!
const cache = {};
const factorial = (n) => {
  // check key in Obj
  if (n in cache) {
    return cache[n];
  }
  // Base condition
  if (n === 1) return 1;

  cache[n] = n * factorial(n - 1);
  console.log(cache);
  return cache[n];
};

console.time("time");
console.log(factorial(4));
console.timeEnd("time");
console.log(factorial(2));
