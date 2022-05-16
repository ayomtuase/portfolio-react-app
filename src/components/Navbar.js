import React from "react";
import Logo from "../assets/logo.png"

const Navbar = () => {
  return (
    <div className="flex bg-[#0a192f] justify-between px-4 h-[80px] fixed items-center w-full text-gray-300">      
      <img src={Logo} className="w-[50px]" alt="Logo" />
      <ul className="flex ">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
