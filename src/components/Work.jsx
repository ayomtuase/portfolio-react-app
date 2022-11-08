import React from "react";
import FuelCreditImg from "../assets/myfuelcredit.png";
import LendSqrImg from "../assets/lendsqr.png";
import ParivestImg from "../assets/parivest.png";

const Work = () => {
  return (
    <>
      <div name="work" className="bg-slate-900 py-16 w-full text-gray-300">
        <div className="md:w-4/5 lg:max-w-3xl xl:max-w-[1000px] mx-auto h-full px-4 flex flex-col justify-center items-baseline">
          <h2 className="inline border-b-4 border-b-sky-700 text-4xl font-bold">
            Work
          </h2>
          <p className="my-4">{"//"} Check out some of my recent work</p>
          <div className="flex flex-wrap w-full gap-4 justify-center text-center">
            <div
              className="rounded-md basis-[calc(100%_-_1rem)] sm:basis-[calc(50%_-_1rem)] lg:basis-[calc(33.333333%_-_1rem)] content-div group flex justify-center items-center"
              style={{ backgroundImage: `url(${ParivestImg})` }}
            >
              <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center">
                <h3 className="text-white font-bold text-2xl">
                  Demo of Parivest's dashboard
                </h3>
                <div className="w-5/6 flex justify-between mt-6">
                  <a
                    className="bg-white rounded-lg px-4 py-3 text-gray-700 font-bold text-lg no-underline"
                    href="https://ayomide-oguntuase-parivest-test.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    className="bg-white rounded-lg px-4 py-3 text-gray-700 font-bold text-lg no-underline"
                    href="https://github.com/ayomtuase/parivest-test"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
            <div
              className="rounded-md basis-[calc(100%_-_1rem)] sm:basis-[calc(50%_-_1rem)] lg:basis-[calc(33.333333%_-_1rem)] content-div group flex justify-center items-center"
              style={{ backgroundImage: `url(${LendSqrImg})` }}
            >
              <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center">
                <h3 className="text-white font-bold text-2xl">
                  Demo of Lendsqr's dashboard
                </h3>
                <div className="w-5/6 flex justify-between mt-6">
                  <a
                    className="bg-white rounded-lg px-4 py-3 text-gray-700 font-bold text-lg no-underline"
                    href="https://ayomide-mofolorunso-oguntuase-lendsqr-fe-test.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Demo
                  </a>
                  <a
                    className="bg-white rounded-lg px-4 py-3 text-gray-700 font-bold text-lg no-underline"
                    href="https://github.com/ayomtuase/lendsqr-fe-test"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
            <div
              className="rounded-md basis-[calc(100%_-_1rem)] sm:basis-[calc(50%_-_1rem)] lg:basis-[calc(33.333333%_-_1rem)] content-div group flex justify-center items-center"
              style={{ backgroundImage: `url(${FuelCreditImg})` }}
            >
              <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center">
                <h3 className="text-white font-bold text-2xl">
                  My work as a Frontend Developer at FuelCredit{" "}
                  {"(A private repo)"}
                </h3>
                <div className="w-5/6 flex justify-between mt-6">
                  <a
                    className="bg-white rounded-lg px-4 py-3 text-gray-700 font-bold text-lg no-underline self-center"
                    href="https://www.myfuelcredit.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
