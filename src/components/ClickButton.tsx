import React from "react";

function ClickButton() {
  const clickHandle: any = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  /* tsx中需要使用箭头函数来进行事件的绑定，因为箭头函数本身是没有this的，
    它的this永远指向它的父级作用域中的this。在这里，他的父级作用域是这个组件实例，
    只有在点击这个组件的时候，函数才会生效，如果没有使用箭头函数，那么箭头函数的this会指向这个事件，在页面加载的时候就会触发*/
  return <button onClick={(e) => clickHandle(e)}>click</button>;
}

export default ClickButton;
