import { useState, useEffect } from "react";

const useLocalStorage = (key: string, defaultValue: string) => {
  const [message, setMessage] = useState(defaultValue);
  console.log(message);

  // 只有message发生变化时才执行
  useEffect(() => {
    let msg: string;
    msg = defaultValue;
    setMessage(msg);
    localStorage.setItem(key, message);
  }, [message, key]);

  return [message, setMessage];
};

export default useLocalStorage;
