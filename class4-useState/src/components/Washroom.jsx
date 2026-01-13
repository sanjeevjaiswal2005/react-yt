import React from "react";

const Washroom = (props) => {
  return (
    <div className={`wash ${props.user}`}>
      <h1>{props.user} Washroom</h1>
    </div>
  );
};

export default Washroom;
