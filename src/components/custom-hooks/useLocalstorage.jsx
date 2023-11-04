import { useState } from "react";

//const [name, setName] = useLocalStorage("name, value");

const useLocalstorage = (key, initialValue) => {
  console.log(key, initialValue);
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      if (typeof window !== "undefined") {
        localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return [storedValue, setValue];
};

export default useLocalstorage;

// function useLocalStorage(key, initialValue) {
//   const storedValue = localStorage.getItem(key);

//   const [value, setValue] = useState(
//     storedValue ? JSON.parse(storedValue) : initialValue
//   );

//   const setStoredValue = (newValue) => {
//     setValue(newValue);
//     localStorage.setItem(key, JSON.stringify(newValue));
//   };

//   return [value, setStoredValue];
// }

// export default useLocalStorage;
