import React, { createRef } from "react";
// 引入router
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useSearchParams,
} from "react-router-dom";
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
import Test from "./components/RouterComponent";

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

const Home = () => <div>this is home</div>;
const About = () => <div>this is about</div>;

const TestPage = () => {
  // params传参用useParams()
  let [params] = useSearchParams();
  // query传参就用get函数，如果是params传参就直接取值
  let id = params.get("id");
  return (
    <div>
      <div>{id}</div>
    </div>
  );
};

function App() {
  const state = {
    msg: "333",
  };
  return (
    <div className="App">
      <header className="App-header">
        {/*用于包裹所有路由*/}
        <BrowserRouter>
          {/*声明路由跳转*/}
          <Link to={"/"}></Link>
          <Link to={"/about"}></Link>
          <Test></Test>
          {/*声明对应路由加载的对象*/}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/test" element={<TestPage />}></Route>
          </Routes>
        </BrowserRouter>
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
        <PushList></PushList>
        <StoreButton></StoreButton>
        <LifeDuration></LifeDuration>
      </header>
    </div>
  );
}

export default App;
