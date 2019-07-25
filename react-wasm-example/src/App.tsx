import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Calculator from "./Calculator";
const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello Wasm!</h1>
        <Calculator />
      </header>
    </div>
  );
};

export default App;
