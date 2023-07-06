import { useState, useEffect } from "react";

// 自定义hook
const useWindowScroll = () => {
  const [y, setY] = useState(0);
  useEffect(() => {
    // 计算当前鼠标滑动的距离，然后更新y
    const scrollHandle = () => {
      const h = document.documentElement.scrollTop;
      setY(h);
    };

    // 清除副作用函数
    return () => {
      return window.addEventListener("scroll", scrollHandle);
    };
  });

  return [y];
};

export default useWindowScroll;
