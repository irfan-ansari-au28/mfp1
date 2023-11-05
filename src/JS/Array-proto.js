// Never use 'this' keyword for arrow function***
Array.prototype.last = function () {
  if (this.length === 0) {
    return "empty array";
  } else {
    return this[this.length - 1];
  }
};

const last = [1, 2, 3].last();
console.log(last, "last");

// Array.prototype.last = => () {
//     if (this.length === 0) {
//       return "empty array";
//     } else {
//       return this[this.length - 1];
//     }
//   };

//   const last = [1, 2, 3].last();
//   console.log(last, "last"); // Return window object
