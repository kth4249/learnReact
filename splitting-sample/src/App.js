import loadable from "@loadable/component";
import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";
// const SplitMe = React.lazy(() => import("./SplitMe"));
const SplitMe = loadable(() => import("./SplitMe"), {
  fallback: <div>loading...</div>,
});

function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello React!
        </p>
        {/* <Suspense fallback={<div>loading...</div>}> */}
        {visible && <SplitMe />}
        {/* </Suspense> */}
      </header>
    </div>
  );
}

export default App;
