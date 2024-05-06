import React from "react";
import HTMLLogo from "../assets/html.png";
import CSSLogo from "../assets/css.png";
import JSLogo from "../assets/javascript.png";
import NodeLogo from "../assets/node.png";
import MongoDBLogo from "../assets/mongo.png";
import TSLogo from "../assets/typescript.png";
import ReactLogo from "../assets/react.png";
import ExpoLogo from "../assets/expo.svg";
import ChakraLogo from "../assets/chakra.png";
import GithubLogo from "../assets/github.png";
import TailwindLogo from "../assets/tailwind.png";
import NextJSLogo from "../assets/nextjs.svg";
import { Element } from "react-scroll";

const Skills = () => {
  return (
    <Element
      name="skills"
      className="bg-slate-900 min-h-screen py-16 w-full text-gray-300"
    >
      <div className="md:w-4/5 lg:max-w-3xl xl:max-w-[1000px] mx-auto h-full px-4 flex flex-col justify-center items-baseline">
        <h2 className="inline border-b-4 border-b-sky-700 text-4xl font-bold">
          Skills
        </h2>
        <p className="my-4">
          {"//"} These are the technologies I've worked with
        </p>
        {/* html, css, js, react, github */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-11/12 lg:w-4/5 mx-auto mt-6 justify-center">
          {[
            {
              text: "HTML",
              image: HTMLLogo,
            },
            {
              text: "CSS",
              image: CSSLogo,
            },
            {
              text: "TailwindCSS",
              image: TailwindLogo,
            },
            {
              text: "ChakraUI",
              image: ChakraLogo,
            },
            {
              text: "Javascript",
              image: JSLogo,
            },
            {
              text: "Typescript",
              image: TSLogo,
            },
            {
              text: "React and React Native",
              image: ReactLogo,
            },
            {
              text: "Next.js",
              image: NextJSLogo,
            },
            {
              text: "Expo",
              image: ExpoLogo,
            },
            {
              text: "Node.js",
              image: NodeLogo,
            },
            {
              text: "MongoDB",
              image: MongoDBLogo,
            },
            {
              text: "Github",
              image: GithubLogo,
            },
          ].map(({ text, image }) => {
            return (
              <div
                key={text}
                className="h-[136px] hover:scale-110 duration-300 bg-slate-900 shadow-md shadow-[#040c16] flex flex-col items-center pb-4"
              >
                <div className="grow flex items-center">
                  <img src={image} className="w-20" alt={text} />
                </div>
                <p className="text-center">{text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </Element>
  );
};

export default Skills;
