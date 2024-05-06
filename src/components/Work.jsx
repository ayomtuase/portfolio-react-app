import React from "react";
import FuelCreditImg from "../assets/myfuelcredit.png";
import LendSqrImg from "../assets/lendsqr.png";
import QMarketImg from "../assets/qmarket.png";
import SereneImg from "../assets/serene.png";
import QshopImg from "../assets/qshop.png";
import SmappsImg from "../assets/smapps.png";
import AgencyImg from "../assets/agency.png";
import TrelloImg from "../assets/trello.png";
import MetrixImg from "../assets/metrix.png";
import RaceImg from "../assets/race.png";
import { Element } from "react-scroll";

const Work = () => {
  return (
    <Element name="work" className="bg-slate-900 py-16 w-full text-gray-300">
      <div className="md:w-4/5 lg:max-w-3xl xl:max-w-[1000px] mx-auto h-full px-4 flex flex-col justify-center items-baseline">
        <h2 className="inline border-b-4 border-b-sky-700 text-4xl font-bold">
          Work
        </h2>
        <p className="my-4">
          {"//"} Check out some of my work and side-projects
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 flex-wrap w-full gap-4 justify-center text-center">
          {[
            {
              bgImage: QMarketImg,
              text: "Find products sold by stores backed by Qshop Inc.",
              demoUrl: "https://qmarket.shop/",
              isPublic: false,
            },
            {
              bgImage: SereneImg,
              text: "A sample store template called Serene backed by Qshop",
              demoUrl: "https://cookwaredealsng.com/?preview=serene",
              isPublic: false,
            },
            {
              bgImage: QshopImg,
              text: "Front-end dev contributor to Qshop's core dashboard",
              extraText: "Email: debbiemo@gmail.com, Password: Christinme26!",
              demoUrl: "https://staging.qshop.tech/store/login",
              isPublic: false,
            },
            {
              bgImage: SmappsImg,
              text: "Front-end dev contributor to Smapps group's restuarant SAAS",
              extraText: "Phone: 08037660037, Password: 660037",
              demoUrl: "https://qrmenu-waiter.smappsgroup.com/#/menu",
              isPublic: false,
            },
            {
              bgImage: FuelCreditImg,
              text: "Frontend Developer at FuelCredit",
              demoUrl: "https://www.myfuelcredit.com/",
              isPublic: false,
            },
            {
              bgImage: AgencyImg,
              text: "Agency Landing Page (Text and Scroll animations)",
              codeUrl: "https://github.com/ayomtuase/codygo-clone",
              demoUrl: "https://codygo-clone.vercel.app/",
              isPublic: true,
            },
            {
              bgImage: MetrixImg,
              text: "Metrix dashboard. (Sample SASS Dashboard)",
              codeUrl: "https://github.com/ayomtuase/metrix",
              demoUrl: "https://metrix-gamma.vercel.app/",
              isPublic: true,
            },
            {
              bgImage: TrelloImg,
              text: "A Trello clone (in progress)",
              codeUrl: "https://github.com/ayomtuase/trelly",
              demoUrl: "https://trelly.vercel.app/b/test-board",
              isPublic: true,
            },
            {
              bgImage: RaceImg,
              text: "Racing bar chart(D3.js, SVG animations)",
              codeUrl: "https://github.com/ayomtuase/d3-exploration",
              demoUrl: "https://d3-exploration.vercel.app/",
              isPublic: true,
            },
            {
              bgImage: LendSqrImg,
              text: "Demo of Lendsqr's dashboard",
              codeUrl: "https://github.com/ayomtuase/lendsqr-fe-test",
              demoUrl:
                "https://ayomide-mofolorunso-oguntuase-lendsqr-fe-test.vercel.app/",
              isPublic: true,
            },
          ].map(({ bgImage, text, isPublic, demoUrl, codeUrl, extraText }) => {
            return (
              <div
                key={text}
                className="rounded-md content-div group flex justify-center items-center"
                style={{ backgroundImage: `url(${bgImage})` }}
              >
                <div className="opacity-0 group-hover:opacity-100 flex flex-col items-center px-2">
                  <h3 className="text-white font-bold text-2xl">{text}</h3>
                  <div className="w-5/6 flex justify-evenly mt-6 gap-3.5">
                    <a
                      className="bg-white rounded-lg px-4 py-3 text-gray-700 font-bold text-lg no-underline"
                      href={demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {isPublic ? "Demo" : "Site"}
                    </a>
                    {isPublic ? (
                      <a
                        className="bg-white rounded-lg px-4 py-3 text-gray-700 font-bold text-lg no-underline"
                        href={codeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code
                      </a>
                    ) : null}
                  </div>
                  {extraText ? <p className='text-xs mt-3 text-center font-medium'>{extraText}</p> : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Element>
  );
};

export default Work;
