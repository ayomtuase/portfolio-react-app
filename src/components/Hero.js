import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Element, Link } from 'react-scroll'

const Hero = () => {
    return (
        <Element name='hero' className="bg-slate-900 min-h-screen h-screen w-full">
            <div className="md:w-4/5 lg:max-w-3xl xl:max-w-[1000px] mx-auto h-full px-6 flex flex-col justify-center items-start">
                <p className="text-base text-sky-300">Hi, my name is</p>
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#ccd6f6]">Ayomide M. Oguntuase</h1>
                <h3 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#8892b0]">I'm a Software Developer</h3>
                <p className="max-w-2xl text-[#8892b0] mt-6">I'm a software developer specializing in developing web applications solving business problems, please take a look around.</p>

                <Link to='work' smooth={true} duration={500}>
                    <button className="text-white mt-6 border-2 px-6 py-3 hover:bg-sky-700 hover:border-sky-700 group">
                        View  Work
                        <HiArrowNarrowRight className="inline ml-2 group-hover:rotate-90 duration-300" />
                    </button>
                </Link>
            </div>
        </Element>
    )
}

export default Hero