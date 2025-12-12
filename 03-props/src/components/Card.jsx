import React from "react";

const Card = ({ user, age, img }) => {
  return (
    <div>
      <div className="card">
        <img src={img} alt="" />
        <h1>
          {user},{age}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad eius
          mollitia rerum.
        </p>
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default Card;
