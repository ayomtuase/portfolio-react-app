import React from "react";
import ProfileImg from "../assets/profile-pic.jpg";
import { Element } from "react-scroll";

const About = () => {
  return (
    <Element
      name="about"
      className="bg-slate-900 min-h-screen w-full flex items-center"
    >
      <div className="max-w-[1000px] w-full mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-x-6">
          <div className="pb-8 sm:text-right">
            <span className="text-[#ccd6f6] border-b-4 border-b-sky-700 text-4xl font-bold">
              About
            </span>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6 mt-4">
          <div className="min-w-60 md:min-w-80">
            <img
              src={ProfileImg}
              className="mx-auto md:ml-auto w-60 md:w-80 h-auto rounded-full"
              alt={"Ayomide"}
            />
          </div>
          <div>
            <p className="font-light text-[#ccd6f6]">
              I'm a software developer specializing in React, Next.js,
              TypeScript, and TailwindCSS, crafting polished and performant web
              applications. Currently, I'm delving into the realms of Node.js,
              Express.js, MongoDB and SQL to enhance my backend prowess and
              build scalable server-side solutions. I'm also exploring React
              Native and Expo for cross-platform mobile development, eager to
              create engaging experiences across devices. Let's collaborate and
              innovate together!
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
