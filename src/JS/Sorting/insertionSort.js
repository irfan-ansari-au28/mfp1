// insertionSort([0,1,4,3,2,5])

function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    // swap
    if (min !== i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
      console.log(i, min);
    }
  }
  return arr;
}

console.log(insertionSort([0, 1, 4, 5, 2, 3]));

// function insertionSort(arr){
//     for(let i=0; i<arr.length; i++){
//         let min = i
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[j] < arr[min]){
//                 min = j
//             }
//         }
//         console.log('x')
//         // swap
//         [arr[i], arr[min]] = [arr[min], arr[i]]
//     }
//     return arr
// }
