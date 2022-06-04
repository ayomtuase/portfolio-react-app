import React from 'react'
import HTMLLogo from '../assets/html.png'
import CSSLogo from '../assets/css.png'
import JSLogo from '../assets/javascript.png'
import ReactLogo from '../assets/react.png'
import GithubLogo from '../assets/github.png'
import TailwindLogo from '../assets/tailwind.png'

const Skills = () => {
  return (
    <div>
        <div className="bg-slate-900 h-screen w-full text-gray-300">
            <div className="md:w-4/5 lg:max-w-3xl xl:max-w-[1000px] mx-auto h-full px-4 flex flex-col justify-center items-baseline">
                <h2 className="inline border-b-4 border-b-sky-700 text-4xl font-bold">
                    Skills
                </h2>
                <p className="my-4">// These are the technologies I've worked with</p>
                {/* html, css, js, react, github */}
                <div className="flex flex-wrap gap-4 w-full md:w-11/12 lg:w-4/5 mx-auto mt-6 justify-center">
                  <div className="hover:scale-110 duration-300 basis-[calc(50%_-_1rem)] sm:basis-[calc(33.333333%_-_1rem)] bg-slate-900 shadow-md shadow-[#040c16] flex flex-col items-center pb-4">
                    <img src={HTMLLogo} className="w-20" alt="HTML logo" />
                    <p className="mt-4">HTML</p>
                  </div>
                  <div className="hover:scale-110 duration-300 basis-[calc(50%_-_1rem)] sm:basis-[calc(33.333333%_-_1rem)] bg-slate-900 shadow-md shadow-[#040c16] flex flex-col items-center pb-4">
                    <img src={CSSLogo} className="w-20" alt="HTML logo" />
                    <p className="mt-4">CSS</p>
                  </div>
                  <div className="hover:scale-110 duration-300 basis-[calc(50%_-_1rem)] sm:basis-[calc(33.333333%_-_1rem)] bg-slate-900 shadow-md shadow-[#040c16] flex flex-col items-center pb-4">
                    <img src={TailwindLogo} className="w-20" alt="HTML logo" />
                    <p className="mt-4">TailwindCSS</p>
                  </div>
                  <div className="hover:scale-110 duration-300 basis-[calc(50%_-_1rem)] sm:basis-[calc(33.333333%_-_1rem)] bg-slate-900 shadow-md shadow-[#040c16] flex flex-col items-center pb-4">
                    <img src={JSLogo} className="w-20" alt="HTML logo" />
                    <p className="mt-4">Javascript</p>
                  </div>                  
                  <div className="hover:scale-110 duration-300 basis-[calc(50%_-_1rem)] sm:basis-[calc(33.333333%_-_1rem)] bg-slate-900 shadow-md shadow-[#040c16] flex flex-col items-center pb-4">
                    <img src={ReactLogo} className="w-20" alt="HTML logo" />
                    <p className="mt-4">React</p>
                  </div>
                  <div className="hover:scale-110 duration-300 basis-[calc(50%_-_1rem)] sm:basis-[calc(33.333333%_-_1rem)] bg-slate-900 shadow-md shadow-[#040c16] flex flex-col items-center pb-4">
                    <img src={GithubLogo} className="w-20" alt="HTML logo" />
                    <p className="mt-4">Github</p>
                  </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Skills