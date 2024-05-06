import React from "react";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <>
      <Element name="contact" className="bg-slate-900 py-16 w-full text-gray-300">
        <div className="sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto h-full px-4 flex flex-col justify-center items-baseline">
          <h2 className="inline border-b-4 border-b-sky-700 text-4xl font-bold">
            Contact
          </h2>
          <p className="my-4">
            {"//"} Submit the form below or shoot me an email -
            oguntuase3@gmail.com
          </p>
          <form
            method="POST"
            action="https://getform.io/f/8890a427-5736-44c7-9326-cce27d71a7d6"
            className="flex flex-col w-full items-center"
          >
            <input
              className="p-2 bg-[#ccdcf6] text-slate-900 w-full"
              type="text"
              placeholder="Name"
              name="name"
              required
            />
            <input
              className="mt-4 p-2 bg-[#ccdcf6] text-slate-900 w-full"
              type="email"
              placeholder="Email"
              name="email"
              required
            />
            <textarea
              className="mt-4 p-2 bg-[#ccdcf6] text-slate-900 w-full"
              name="message"
              rows={10}
              placeholder="Message"
              required
            ></textarea>

            <button className="text-white mt-6 border-2 px-6 py-3 hover:bg-sky-700 hover:border-sky-700">
              Let's Collaborate
            </button>
          </form>
        </div>
      </Element>
    </>
  );
};

export default Contact;
