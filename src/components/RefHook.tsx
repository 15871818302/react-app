import { useEffect, useRef } from "react";

const UseRefHook = () => {
  // 先用 useRef 得到一个ref对象，然后在设置到dom上，如果要给组件使用ref，必须是类组件才可以，函数组件没有ref
  const test = useRef(null);

  useEffect(() => {
    console.log(test);
  }, []);

  return (
    <>
      <div ref={test}>22222</div>
    </>
  );
};

export default UseRefHook;
