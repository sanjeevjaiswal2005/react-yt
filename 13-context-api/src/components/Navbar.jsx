import React, { useContext } from "react";
import { UserContextData } from "../context/UserContext";

const Navbar = () => {
  const data = useContext(UserContextData);
  console.log(data);

  return (
    <div className="p-4 w-screen bg-teal-400 rounded">
      <h1 className="text-3xl">This is Navbar {data.name}</h1>
    </div>
  );
};

export default Navbar;
