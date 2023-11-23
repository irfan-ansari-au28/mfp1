// const flattenArray = (arr, result) =>{

//     for(let ele of arr){
//         if(!Array.isArray(ele)){
//             result.push(ele)
//         }else{
//             flattenArray(ele, result)
//         }
//     }
//     return result
// }

// const flattenArray = (arr) => {
//     let result = []

//     for(let i=0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//             result = result.concat(flattenArray(arr[i]))
//         }else {
//             result.push(arr[i])
//         }
//     }
//     return result
// }

// method: 3

// const flattenArray = (arr)  => {
//     return arr.reduce((result, current) => {
//         return result.concat(Array.isArray(current) ? flattenArray(current) : current)
//     },[])
// }

// method: 4

const flattenArray = (arr) => {
  return arr.flat(Infinity);
};

flattenArray([1, 2, [3, 4, [5]], [6, 7], 8]);
