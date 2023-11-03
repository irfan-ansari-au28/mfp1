function debounce(func, delay) {
  // remove previous timer
  let timer;
  return function debounced(...args) {
    const context = this;

    console.log(timer);
    timer = setTimeout(() => {
      func.apply(context, ...args);
    }, delay);
  };
}

const heavyOperations = () => {
  console.log("heavy operations");
};

const debouncedOperation = debounce(heavyOperations, 1000);
debouncedOperation();
debouncedOperation();
debouncedOperation();
