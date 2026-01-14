import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [name, setName] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [role, setRole] = useState("");
  const [dec, setDec] = useState("");
  const [userAll, setUserAll] = useState([]);
  function submitHandelaer(e) {
    e.preventDefault();
    // const oldUser = [...userAll];
    // oldUser.push({ name, imgUrl, role, dec });
    // setUserAll(oldUser);
    setUserAll([...userAll, { name, imgUrl, role, dec }]);
    console.log(userAll);

    console.log("submit ho gya..");
    setName("");
    setImgUrl("");
    setRole("");
    setDec("");
  }
  const deleteHandler = (idx) => {
    const copyUser = [...userAll];
    copyUser.splice(idx, 1);
    setUserAll(copyUser);
    console.log(userAll);
  };
  return (
    <div>
      <form
        onSubmit={(e) => {
          submitHandelaer(e);
        }}
        className="bg-blue-300 p-10 flex justify-between flex-wrap"
      >
        <input
          className="text-white-500 bg-amber-600 rounded text-xl mb-4"
          type="text"
          value={name}
          placeholder="Enret your name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          className="text-white-500 bg-amber-600 rounded text-xl mb-4"
          type="text"
          value={imgUrl}
          placeholder="Enter your ImgUrl"
          onChange={(e) => {
            setImgUrl(e.target.value);
          }}
        />
        <input
          className="text-white-500 bg-amber-600 rounded text-xl m"
          type="text"
          value={role}
          placeholder="Enter your Role"
          onChange={(e) => {
            setRole(e.target.value);
          }}
        />
        <input
          className="text-white-500 bg-amber-600 rounded text-xl"
          type="text"
          value={dec}
          placeholder="Enter description"
          onChange={(e) => {
            setDec(e.target.value);
          }}
        />
        <button className="bg-teal-400 px-5 p-2 rounded-xl text-xl font-bold active:scale-95">
          Submit
        </button>
      </form>
      <div className="flex flex-col justify-between">
        {userAll.map((elem, idx) => {
          return <Card idx={idx} elem={elem} deleteHandler={deleteHandler} />;
        })}
      </div>
    </div>
  );
};

export default App;
