import React from "react";

const About = () => {
  return (
    <div name="about" className="bg-slate-900 h-screen w-full flex items-center">
      <div className="max-w-[1000px] w-full mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 gap-x-6">
          <div className="pb-8 sm:text-right">
            <span className="text-[#ccd6f6] border-b-4 border-b-sky-700 text-4xl font-bold">
              About
            </span>
          </div>
          <div></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <p className="text-[#ccd6f6] text-4xl sm:text-right font-bold">
              Hi. I'm Ayomide, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p className="font-light text-[#ccd6f6]">
              I am passionate about creating high-quality user interfaces that
              benefits business and end-users alike. I desire to help
              individuals, small businesses and large corporations bring their
              ideas to fruition with high-quality software. What would you like
              to accomplish with a highly driven, professional front-end
              engineer in your arsenal?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
