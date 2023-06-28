import React from "react";

// 受控表单组件
// 通过react控制对应的组件
class InputComponent extends React.Component<any, any> {
  state = {
    value: "the message",
  };
  changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      value: e.target.value,
    });
    console.log(e);
  };

  render() {
    return <input type="text" onChange={(e) => this.changeHandler(e)}></input>;
  }
}

export default InputComponent;
