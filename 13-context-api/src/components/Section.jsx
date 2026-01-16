import React, { useContext } from "react";
import { UserContextData } from "../context/UserContext";

const Section = () => {
  const data = useContext(UserContextData);
  return (
    <div
      className="h-full
     w-screen bg-indigo-300"
    >
          <h2 className="text-5xl font-bold">Section{ data.id}</h2>
    </div>
  );
};

export default Section;
