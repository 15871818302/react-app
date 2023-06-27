import React from "react";
import logo from "./logo.svg";
import "./App.css";

const list = [
  {
    name: "alpha",
  },
  {
    name: "beta",
  },
  {
    name: "gamma",
  },
];

// const styleObj = {
//   color: "aqua",
//   fontsize: 16,
//   fontWeight: 700,
// };

// 注：react中函数组件需要首字母大写，否则会被认为是普通函数，并且必须拥有返回值
function FirstComponent() {
  return <div>firstComponent</div>;
}

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

function ClickButton() {
  const clickHandle: any = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  /* tsx中需要使用箭头函数来进行事件的绑定，因为箭头函数本身是没有this的，
  它的this永远指向它的父级作用域中的this。在这里，他的父级作用域是这个组件实例，
  只有在点击这个组件的时候，函数才会生效，如果没有使用箭头函数，那么箭头函数的this会指向这个事件，在页面加载的时候就会触发*/
  return <button onClick={() => clickHandle()}>click</button>;
}

// 受控表单组件
class InputComponent extends React.Component<any, any> {
  state = {
    value: "the message",
  };
  changeHandler = (e: React.ChangeEventHandler<HTMLInputElement>) => {
    console.log(e);
  };

  render() {
    return <input type="text" onChange={() => this.changeHandler}></input>;
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          {list.map((item) => (
            <div className="list-class" key={item.name}>
              {item.name}
            </div>
          ))}
        </div>
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ClickButton></ClickButton>
        <InputComponent></InputComponent>
      </header>
    </div>
  );
}

export default App;
