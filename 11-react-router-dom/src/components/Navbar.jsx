import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-green-400 p-5 flex justify-around text-2xl font-medium rounded">
        <h1>Navbar</h1>
        {/* <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a> */}
        {/* <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About us</Link>
        <Link to={"/contact"}>Contact</Link> */}

        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-white-400 border-b-4" : "text-black"
          }
        >
          Home
        </NavLink>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "text-white-400 border-b-4" : "text-black"
          }
        >
          AboutUs
        </NavLink>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? "text-white-400 border-b-4" : "text-black"
          }
        >
          Contact
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
