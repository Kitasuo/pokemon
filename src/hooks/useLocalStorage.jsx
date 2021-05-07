import React from "react";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = React.useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setLocalStorageValue = (value) => {
    setValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };
  return [value, setLocalStorageValue];
};

export default useLocalStorage;
