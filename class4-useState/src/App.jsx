import React, { useState } from "react";

const App = () => {
  // let marks = [20, 30, 40, 50, 60];
  const [marks, setMarks] = useState([20, 96, 40, 50, 60]);
  const [grased, setGrased] = useState(false);
  function giveGrased() {
    if (grased) {
      console.log("You already goted the greased marks ");
    } else {
      const newMarks = marks.map((elem) => {
        if (elem < 95) {
          return elem + 10;
        } else return elem;
      });
      setGrased(true);
      setMarks(newMarks);
    }
  }
  return (
    <div>
      {marks.map((elem, idx) => {
        return (
          <h1 key={idx}>
            Student {idx + 1} marks is {elem} ({elem > 33 ? "Pass" : "Fail"})
          </h1>
        );
      })}
      <button onClick={giveGrased}>Greased Marks</button>;
    </div>
  );
};

export default App;
