import React, { useEffect, useState } from "react";

const App = () => {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);
  const [user, setUser] = useState("");
  useEffect(() => {
    console.log("useEffect chal rha hai madam....");
  }, [counter1,user]);
  return (
    <>
      <input
        type="text"
        placeholder="Enter your name "
        value={user}
        onChange={(e) => {
          console.log(e.target.value);
          setUser(e.target.value);
        }}
      />

      <h1>{counter1}</h1>
      <button onClick={() => setCounter1(counter1 + 1)}>IncCounter</button>
      <br />
      <br />
      <h1>{counter2}</h1>
      <button onClick={() => setCounter2(counter2 + 1)}>IncCounter</button>
      <br />
      <br />
      <h1>{counter3}</h1>
      <button onClick={() => setCounter3(counter3 + 1)}>IncCounter</button>
    </>
  );
};

export default App;
