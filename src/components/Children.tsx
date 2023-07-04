import React from "react";

// 父组件
// 父组件中可以直接通过props.children属性获取子组件中的内容
function FatherComponent(props: any) {
  return (
    <div>
      <h1>fatherComponent</h1>
      {props.children}
    </div>
  );
}

// 子组件
function ChildrenComponent() {
  return (
    <div>
      <h2>childrenComponent</h2>
    </div>
  );
}

function UnionComponent() {
  return (
    <div>
      <FatherComponent>
        <ChildrenComponent></ChildrenComponent>
      </FatherComponent>
    </div>
  );
}

export default UnionComponent;
