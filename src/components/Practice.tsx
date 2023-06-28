import React from "react";

// 个人练习
class Practice extends React.Component<any, any> {
  state = {
    status: 0,
  };

  changeHandle = (num: number) => {
    this.setState({
      status: num,
    });
  };

  render() {
    return (
      <div>
        <span
          onClick={() => this.changeHandle(0)}
          className={this.state.status ? "blue" : "red"}
        >
          red
        </span>
        <span
          onClick={() => this.changeHandle(1)}
          className={this.state.status ? "red" : "blue"}
        >
          blue
        </span>
      </div>
    );
  }
}

export default Practice;
