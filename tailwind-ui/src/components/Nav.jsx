import React from "react";

const Nav = () => {
  return (
    <div className="bg-red-500 h-[80px] flex items-center justify-between px-10 rounded-2xl">
      {/* Logo */}
      <div>
        <h1 className="text-xl font-bold text-white">Logo</h1>
      </div>

      {/* Menu */}
      <div className="flex gap-6 text-white">
        <h1 className="cursor-pointer hover:text-black">Home</h1>
        <h1 className="cursor-pointer hover:text-black">About</h1>
        <h1 className="cursor-pointer hover:text-black">Services</h1>
        <h1 className="cursor-pointer hover:text-black">Contact</h1>
      </div>
    </div>
  );
};

export default Nav;
