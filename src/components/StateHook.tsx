import { useState, useEffect } from "react";
import axios from "axios";

const Counter = (props: any) => {
  // 如果在不确定参数的情况下，可以直接使用回调函数进行赋值，如果在确定默认值的情况下，可以直接传参
  const [count, setCount] = useState(() => {
    return props.count;
  });

  // 这边不能直接在useEffect上面的回调函数使用async await 因为这个回调函数接收一个void参数的结果，但是axios返回的是一个Promise类型，所以会报错
  useEffect(() => {
    const fetchHandle = async () => {
      const res = await axios.get("https://cafemaker.wakingsands.com/servers");
      console.log(res);
    };
    fetchHandle();
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
    </div>
  );
};

const Main = () => {
  return (
    <>
      <Counter count={10}></Counter>
      <Counter count={20}></Counter>
    </>
  );
};

export default Main;
