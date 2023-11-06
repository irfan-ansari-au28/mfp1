Array.prototype.customMap2 = function (callback, thisArg) {
  console.log(this, callback, thisArg);

  const array = this;
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    if (i in array) {
      newArray[i] = callback.call(thisArg, array[i], i, array);
    }
  }

  return newArray;
};

[1, 2, 3].customMap2((i, idx, self) => i ** 2);
