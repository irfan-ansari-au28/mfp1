const arr1 = [1, 2, [3, 4, [2]], [4, 5], 6, [0]];

const result = [];
const flattenArr = (arr) => {
  for (let item of arr) {
    if (Array.isArray(item)) {
      flattenArr(item);
    } else {
      result.push(item);
    }
  }
  return result;
};

console.log(flattenArr(arr1));
