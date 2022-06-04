import React, { useState } from "react";

import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from 'react-icons/bs';

import Logo from "../assets/my_logo.png"


const Navbar = () => {

  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex bg-slate-900 justify-between px-4 h-[80px] fixed items-center w-full text-gray-300">
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

      <div className={!isNavOpen ? "hidden" :
        `absolute bg-slate-900 top-0 left-0 flex w-full h-screen 
      flex-col items-center justify-center text-4xl`}>
        <p className="py-6">Home</p>
        <p className="py-6">About</p>
        <p className="py-6">Skills</p>
        <p className="py-6">Work</p>
        <p className="py-6">Contact</p>
      </div>

      <div className="hidden md:flex fixed top-1/3">
        <ul className="">
          <li className="bg-blue-600 p-4 w-40 -ml-28 hover:-ml-7 duration-300">
            <a href="/" className="w-full flex justify-between items-center text-gray-300">
              LinkedIn
              <FaLinkedin size="30" />
            </a>
          </li>
          <li className="bg-[#333333] p-4 w-40 -ml-28 hover:-ml-7 duration-300">
            <a href="/" className="w-full flex justify-between items-center text-gray-300">
              Github
              <FaGithub size="30" />
            </a>
          </li>
          <li className="bg-emerald-500 p-4 w-40 -ml-28 hover:-ml-7 duration-300">
            <a href="/" className="w-full flex justify-between items-center text-gray-300">
              Email
              <HiOutlineMail size="30" />
            </a>
          </li>
          <li className="bg-[#565f69] p-4 w-40 -ml-28 hover:-ml-7 duration-300">
            <a href="/" className="w-full flex justify-between items-center text-gray-300">
              Resume
              <BsFillPersonLinesFill size="30" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
