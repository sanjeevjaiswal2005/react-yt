
const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="right">
          <div className="logo">
            {/* <img src="/logo.jpg" alt="" /> */}
            <h1>Logo</h1>
          </div>
          <div className="other">
            <h3>About Me</h3>
            <h3>Portfolio</h3>
            <h3>Services</h3>
            <h3>Blog</h3>
          </div>
        </div>
        <div className="left">
          <h5>
            Book A call <i class="ri-arrow-right-up-line"></i>
          </h5>
          <hr />
        </div>
      </div>
    </>
  );
};

export default Navbar;
