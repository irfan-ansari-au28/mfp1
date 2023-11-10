// 1,50

const arr = [...Array(50).keys()].map((i) => i + 1);
console.log(arr);

const shuffledArray = [1, 2, 3, 4, 5]
  .map((item) => ({ sort: Math.random(), item: item }))
  .sort((item1, item2) => item1.sort - item2.sort)
  .map((item) => item.item);

console.log(shuffledArray);
