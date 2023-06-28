import React, { createRef } from "react";

// 非受控表单组件
// 通过直接操作dom来操作对应的值
class TextComponent extends React.Component<any, any> {
  // 使用createRef生成一个存放dom的容器
  msgRef: React.RefObject<HTMLInputElement> = createRef();

  changeHandler = () => {
    // 通过打印msgRef来获取组件中的值
    console.log(this.msgRef);
  };

  render() {
    return (
      <div>
        <input ref={this.msgRef}></input>
        <button onClick={() => this.changeHandler()}>点击</button>
      </div>
    );
  }
}

export default TextComponent;
