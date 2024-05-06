import React, { useState } from "react";

import { Link } from "react-scroll";
import { FaBars, FaTimes, FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

import Logo from "../assets/my_logo.png";

const resumePath = process.env.PUBLIC_URL + "/files/Ayo-resume.pdf";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleMobileNav = () => setIsNavOpen(!isNavOpen);

  return (
    <div className="flex bg-slate-900 justify-between px-4 h-[80px] sticky top-0 items-center w-full text-gray-300 z-50">
      <img src={Logo} className="w-[120px]" alt="Logo" />

      <ul className="hidden sm:flex">
        {[
          { text: "Home", to: "hero" },
          { text: "About", to: "about" },
          { text: "Skills", to: "skills" },
          { text: "Work", to: "work" },
          { text: "Contact", to: "contact" },
        ].map(({ to, text }) => {
          return (
            <li key={to}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                offset={to !== "hero" ? -100 : undefined}
              >
                {text}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        className="z-50 absolute top-7 right-6 text-xl"
        onClick={toggleMobileNav}
      >
        {!isNavOpen ? (
          <FaBars className="sm:hidden" />
        ) : (
          <FaTimes className="" />
        )}
      </div>

      <ul
        className={
          !isNavOpen
            ? "hidden"
            : `absolute bg-slate-900 top-0 left-0 flex w-full h-screen 
      flex-col justify-evenly items-center text-4xl`
        }
      >
        {[
          { text: "Home", to: "hero" },
          { text: "About", to: "about" },
          { text: "Skills", to: "skills" },
          { text: "Work", to: "work" },
          { text: "Contact", to: "contact" },
        ].map(({ to, text }) => {
          return (
            <li key={to}>
              <Link
                to={to}
                smooth={true}
                duration={500}
                onClick={toggleMobileNav}
                offset={to !== "hero" ? -50 : undefined}
              >
                {text}
              </Link>
            </li>
          );
        })}
        
        <li className="px-0 w-full">
          <div className="flex justify-evenly text-base">
            <a
              href="https://www.linkedin.com/in/ayomide-oguntuase/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <FaLinkedin size="25" className="mb-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com/ayomtuase"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <FaGithub size="25" className="mb-2" />
              Github
            </a>
            <a
              href="mailto:oguntuase3@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center"
            >
              <HiOutlineMail size="25" className="mb-2" />
              Email
            </a>
            <a
              href={resumePath}
              download
              className="flex flex-col items-center"
            >
              <BsFillPersonLinesFill size="25" className="mb-2" />
              Resume
            </a>
          </div>
        </li>
      </ul>

      <div className="hidden md:flex fixed top-1/3">
        <ul className="">
          <li className="bg-blue-600 p-4 w-40 -ml-28 hover:-ml-7 duration-300">
            <a
              href="https://www.linkedin.com/in/ayomide-oguntuase/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-between items-center text-gray-300"
            >
              LinkedIn
              <FaLinkedin size="30" />
            </a>
          </li>
          <li className="bg-[#333333] p-4 w-40 -ml-28 hover:-ml-7 duration-300">
            <a
              href="https://github.com/ayomtuase"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-between items-center text-gray-300"
            >
              Github
              <FaGithub size="30" />
            </a>
          </li>
          <li className="bg-emerald-500 p-4 w-40 -ml-28 hover:-ml-7 duration-300">
            <a
              href="mailto:oguntuase3@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex justify-between items-center text-gray-300"
            >
              Email
              <HiOutlineMail size="30" />
            </a>
          </li>
          <li className="bg-[#565f69] p-4 w-40 -ml-28 hover:-ml-7 duration-300">
            <a
              href={resumePath}
              download
              className="w-full flex justify-between items-center text-gray-300"
            >
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
