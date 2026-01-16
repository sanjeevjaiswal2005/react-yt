import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <h2>Navbar</h2>
        <NavLink to="/">
          <h3>Home</h3>
        </NavLink>
        <NavLink to="/about">
          <h3>About</h3>
        </NavLink>
        <NavLink to="/contact">
          <h3>Contact</h3>
        </NavLink>
        <NavLink to="/course">
          <h3>Course</h3>
        </NavLink>
      </div>
    </>
  );
};

export default Navbar;
