import React from "react";
import { ClassSon, SonComponent } from "./LinkComponent";

class SecondPractice extends React.Component<any, any> {
  state: any = {
    commandList: [],
    commandContent: "",
  };

  changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      commandContent: e.target.value,
    });
  };

  testList: any = [];

  sendHandle = () => {
    let date = new Date().getTime();
    let commandObj = {
      content: "",
      id: date,
    };
    commandObj.content = this.state.commandContent;
    this.testList.push(commandObj);
    // 通过中间的变量转换一下，否则会报错
    this.setState({
      commandList: this.testList,
    });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={(e) => this.changeHandle(e)}></input>
        <button onClick={() => this.sendHandle()}>发送</button>
        {this.state.commandList.map((item: any) => (
          <div key={item.id}>{item.content}</div>
        ))}
        <SonComponent content={this.state.commandContent}></SonComponent>
        <ClassSon content={this.state.commandContent}></ClassSon>
      </div>
    );
  }
}

export default SecondPractice;
