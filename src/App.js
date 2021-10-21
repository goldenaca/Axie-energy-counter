import React from "react";
import "./App.css";
import AxieEnergyCounter from "./components/AxieEnergyCounter";
import axieLogo from "./images/axie-logo.png";

function App() {
  return (
    <div className="app">
      <img className="logo" src={axieLogo} alt="" />
      <AxieEnergyCounter />
    </div>
  );
}

export default App;
