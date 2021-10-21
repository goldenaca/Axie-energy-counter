import React from "react";
import "./axie-energy-counter.css";

const AxieEnergyCounter = () => {
  const [energy, setEnergy] = React.useState(3);
  const [round, setRound] = React.useState(1);

  const suma = (x) => {
    if (energy + x > 10) {
      setEnergy(10);
    } else setEnergy(energy + x);
  };

  const resta = () => {
    if (energy === 0) return;
    setEnergy(energy - 1);
  };

  return (
    <div className="energy-counter">
      <h2 className="title"> Round: {round}</h2>
      <div className="counter-buttons-container">
        <i onClick={resta} className="fas fa-minus"></i>
        <i onClick={() => suma(1)} className="fas fa-plus"></i>
      </div>
      <h1 className="energy">{energy}/10</h1>
      <button
        className="btn"
        onClick={() => {
          setRound(round + 1);
          suma(2);
        }}
      >
        Next round
      </button>
      <button
        className="btn"
        onClick={() => {
          setRound(1);
          setEnergy(3);
        }}
      >
        New arena
      </button>
    </div>
  );
};

export default AxieEnergyCounter;
