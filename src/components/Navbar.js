import React, { useState } from "react";
import Logo from "../assets/my_logo.png"
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex bg-[#0a192f] justify-between px-4 h-[80px] sticky top-0 items-center w-full text-gray-300">
      <img src={Logo} className="w-[120px]" alt="Logo" />

      <ul className="hidden sm:flex">
        <li>Home</li>
        <li>About</li>
        <li>Skills</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      <div className="z-50 absolute top-7 right-6 text-xl" onClick={() => setIsNavOpen(!isNavOpen)}>
        {
          !isNavOpen ? <FaBars className="sm:hidden" /> : <FaTimes className="" />
        }
      </div>


      <div className={!isNavOpen ? "hidden": 
      `absolute bg-[#0a192f] top-0 left-0 flex w-full h-screen 
      flex-col items-center justify-center text-4xl`}>
        <p className="py-6">Home</p>
        <p className="py-6">About</p>
        <p className="py-6">Skills</p>
        <p className="py-6">Work</p>
        <p className="py-6">Contact</p>
      </div>



    </div>
  );
};

export default Navbar;
