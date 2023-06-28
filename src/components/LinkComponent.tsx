import React from "react";

// 子组件中props属性为只读，不可在子组件中更改，并且可以传递任意类型的数据

// 函数式子组件
export function SonComponent(props: any) {
  console.log(props);
  return <div>{props.content}</div>;
}

// 类子组件
export class ClassSon extends React.Component<any, any> {
  render() {
    return <div>{this.props.content}</div>;
  }
}
