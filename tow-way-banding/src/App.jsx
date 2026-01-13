import React, { useState } from "react";
const App = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [userAll, setuserAll] = useState([]);
  function submitHandler(e) {
    e.preventDefault();
    let oldUser = [...userAll];
    oldUser.push({ user, email });
    console.log(oldUser);
    setuserAll(oldUser);

    setUser("");
  }
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        <input
          type="text"
          placeholder="Enter your name "
          value={user}
          onChange={(e) => {
            setUser(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Enter your email "
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
      {userAll.map((elem, idx) => {
        return (
          <div key={idx}>
            <h1>{elem.user}</h1>
            <p>{elem.email}</p>
          </div>
        );
      })}
    </div>
  );
};

export default App;
