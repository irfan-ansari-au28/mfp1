const heavyCalc = (n) => {
  let res = 1;
  for (let i = 0; i < n; i++) {
    res += 1;
  }
  return res;
};

const memoiz = (fn) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key]) {
      console.log("value from key");
      return cache[key];
    } else {
      let result = fn(...args);
      cache[key] = result;
      console.log("computed value");
      return result;
    }
  };
};

const memoizValue = memoiz(heavyCalc);
console.time("start1");
console.log(memoizValue(99999));
console.timeEnd("start1");

//
console.time("start2");
console.log(memoizValue(99999));
console.timeEnd("start2");
