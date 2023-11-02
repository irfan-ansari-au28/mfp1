const add = (a) => (b) => a + b;
console.log(add(2)(3));

// infinite add(1)(2)(3)(4)()

const addInf = (a) => (b) => b ? addInf(a + b) : a;

console.log(addInf(1)(2)(3)(4)());
