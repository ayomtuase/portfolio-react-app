import React from "react";
import { Element } from "react-scroll";
import ProfileImg from "../assets/profile-pic.jpg";

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
          <div className="font-light text-[#ccd6f6]">
            <p>
              I'm a software developer specializing in React, Next.js,
              TypeScript, and TailwindCSS—crafting scalable, visually polished,
              and high-performance web applications.
            </p>
            <p className="mt-6">
              I’ve engineered complex UI systems using tools like ShadcnUI,
              Zustand, and SWR, and built AI-powered dashboards and data-rich
              visualizations with D3.js.
            </p>
            <p className="mt-6">
              On the backend, I’m proficient in Node.js, Express.js, PostgreSQL,
              and DrizzleORM, and have delivered full-stack systems with Django
              and REST APIs. I’ve implemented real-time features using
              WebSockets and background processing with Redis and BullMQ.
            </p>
            <p className="mt-6">
              My DevOps skills include Docker, CI/CD pipelines, and deploying to
              cloud platforms like Google Cloud. Currently, I’m diving deeper
              into advanced AI integrations (OpenAI, Gemini, RAG systems) and
              experimenting with scalable architectures. I’m passionate about
              clean, maintainable code, seamless user experiences, and building
              tools that grow with your needs. Let’s build something powerful
              together!
            </p>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default About;
