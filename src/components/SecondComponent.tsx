import React from "react";

// 注：react中类组件也需要首字母大写，并且需要render函数来确定返回的结构，render函数需要返回值
class SecondComponent extends React.Component<any, any> {
  state = {
    count: 1,
  };

  countHandle = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  render() {
    return (
      <div onClick={() => this.countHandle()}>
        secondComponent{this.state.count}
      </div>
    );
  }
}

export default SecondComponent;
