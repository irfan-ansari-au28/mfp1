// export const throttle = (func, delay) => {
//   let lastCall = 0;
//   return (...args) => {
//     const now = Date.now();
//     if (now - lastCall >= delay) {
//       func(...args);
//       lastCall = now;
//     }
//   };
// };

export function throttle(func, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      func(...args);
      lastCall = now;
      console.log("lastCall-", lastCall);
    }
  };
}
