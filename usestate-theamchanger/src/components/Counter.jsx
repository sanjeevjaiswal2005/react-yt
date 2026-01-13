import React, { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(0);
  function incCounter() {
    setCounter(counter + 1);
  }
  function decCounter() {
    if (counter > 0) setCounter(counter - 1);
  }
  return (
    <div>
      <div className="counter">
        <h1>{counter}</h1>
      </div>
      <button onClick={incCounter}>Increase</button>
      <button style={{ backgroundColor: "red" }} onClick={decCounter}>
        Decrease
      </button>
    </div>
  );
};

export default Counter;
