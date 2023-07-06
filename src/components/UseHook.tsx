import { useState, useEffect } from "react";
import useWindowScroll from "./CustomHook";
import useLocalStorage from "./LocalHook";

const HookComponent = () => {
  // 该钩子有两个参数，第一个是传入的初始值，第二个的更改该初始值的函数
  // 该表达式中 count 为初始值变量，useState 中的参数就是该变量的初始值
  // setCount 这个函数就相当于类声明组件中的 setState ，通过新值直接替换旧值
  // 初始值只会在第一次生效，后续都会拿到最新的状态值

  // useState函数可以写多次，只能放在函数组件中，但是无法放入if for或者其他函数等逻辑循环中
  const [count, setCount] = useState(0);

  const [str, setStr] = useState("initial");

  const [y] = useWindowScroll();
  console.log(y);

  let key = `test${count}`;
  let value = `222${count}`;
  const [message, setMessage] = useLocalStorage(key, value);
  // 在这种写法下，无论如何都会执行
  useEffect(() => {
    // 在useEffect中可以进行dom操作，ajax请求等一系列操作
    // document.title = `当前点击了${count}次`;
  });

  // 这种情况下，只有在第一次进入页面的时候，才会执行，通过添加空数组这个依赖项来控制函数执行时机
  useEffect(() => {
    console.log("添加空数组");
  }, []);

  // useEffect(() => {
  //   const timeId = setInterval(() => {
  //     setCount(count + 1);
  //   }, 1000);
  //   // 想要清除副作用钩子，直接return一个函数出去，在函数中做清理副作用的操作
  //   return () => {
  //     clearInterval(timeId);
  //   };
  // }, [count]);

  // 此种状况下，只有依赖项发生改变的时候才会执行,首次进入页面也会执行
  useEffect(() => {
    console.log("依赖项变化的时候执行");
  }, [count]);

  // 因为涉及到状态更改，所以组件会进行重新渲染，当组件重新渲染时，会拿到最新的状态值，并不是旧状态值，所以再次渲染组件的时候，就会自动将最新的值渲染上去
  console.log(count);
  return (
    <div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        {count}
      </button>
      <button
        onClick={() => {
          setStr("new");
        }}
      >
        {str}
      </button>
    </div>
  );
};

export default HookComponent;
