import React, { useState } from "react";
import Theam from "./components/Theam";
import Counter from "./components/Counter";
const App = () => {
  const [theam, setTheam] = useState("dark");
  function chageTheam() {
    setTheam();
    if (theam == "dark") setTheam("light");
    else setTheam("dark");
  }
  return (
    <>
      <Theam user={theam} />

      <div className="pairent">
        <Counter />
        <button style={{ backgroundColor: "red" }} onClick={chageTheam}>
          CHANGE THEAM
        </button>
      </div>
    </>
  );
};

export default App;
