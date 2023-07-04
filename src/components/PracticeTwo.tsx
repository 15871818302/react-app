import React from "react";

interface className {
  id: number;
  name: string;
  delHandle: Function;
}

class FatherComponent extends React.Component<any, any> {
  state = {
    itemList: [
      {
        id: 1,
        name: "item 1",
      },
      {
        id: 2,
        name: "item 2",
      },
      {
        id: 3,
        name: "item 3",
      },
    ],
  };

  deleteHandle = (id: number) => {
    console.log(id);
    this.setState({
      itemList: this.state.itemList.filter((item) => item.id !== id),
    });
  };

  render() {
    return (
      <div>
        <div>列表数据</div>
        {/*此种写法会报错，因为在render中进行了更新操作，因为循环中函数会一直执行，执行之后就会进行元素的删除，本身render中是不允许这种直接的状态更新操作的*/}
        {/*更新：使用箭头函数之后就会消除此种错误*/}
        {/*更新：因为需要将此种函数传递给子组件，所以不能使用箭头函数的形式，相当于是以一个参数的形式传递给子组件*/}
        <SonComponent
          list={this.state.itemList}
          deleteHandle={this.deleteHandle}
        ></SonComponent>
        {/*{this.state.itemList.map((item) => {*/}
        {/*  return (*/}
        {/*    <SonComponent*/}
        {/*      {...item}*/}
        {/*      key={item.id}*/}
        {/*      // @ts-ignore*/}
        {/*      delHandle={() => this.deleteHandle(item.id)}*/}
        {/*    />*/}
        {/*  );*/}
        {/*})}*/}
      </div>
    );
  }
}

// 子组件
// 此种写法会报错，因为在render中进行了更新操作，因为循环中函数会一直执行，执行之后就会进行元素的删除，本身render中是不允许这种直接的状态更新操作的
// 更新之后，不报错，但是无法进行删除操作
function SonComponent(props: any) {
  return (
    <div>
      {props.list.map((item: className) => (
        <div key={item.id}>
          <span>{item.name}</span>
          <span
            style={{ cursor: "pointer" }}
            // 在子组件中使用箭头函数来指定使用父组件中传递过来的函数
            onClick={() => props.deleteHandle(item.id)}
          >
            删除
          </span>
        </div>
      ))}
    </div>
  );
}

// function SonComponent(props: className) {
//   console.log(props);
//   return (
//     <div>
//       <span>{props.name}</span>
//       <span onClick={props.delHandle(props.id)}>删除</span>
//     </div>
//   );
// }

export default FatherComponent;
