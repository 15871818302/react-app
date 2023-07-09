import React, { createRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import ClickButton from "./components/ClickButton";
import InputComponent from "./components/InputComponent";
import TextComponent from "./components/TextComponent";
import Practice from "./components/Practice";
import SecondPractice from "./components/SecondPractice";
import FatherComponent from "./components/PracticeTwo";
import UnionComponent from "./components/Children";
import LifeDuration from "./components/LifeDuration";
import HookComponent from "./components/UseHook";
import Main from "./components/StateHook";
import UseRefHook from "./components/RefHook";
import StoreButton from "./components/UseStore";
import PushList from "./components/SecondStore";

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

function App() {
  const state = {
    msg: "333",
  };
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
        <TextComponent></TextComponent>
        <Practice></Practice>
        <SecondPractice></SecondPractice>
        <FatherComponent></FatherComponent>
        <UnionComponent></UnionComponent>
        <HookComponent></HookComponent>
        <Main></Main>
        <UseRefHook></UseRefHook>
        <StoreButton></StoreButton>
        <LifeDuration></LifeDuration>
        <PushList></PushList>
      </header>
    </div>
  );
}

export default App;
