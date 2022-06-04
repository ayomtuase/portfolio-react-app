import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll'

const Hero = () => {
    return (
        <div name="hero" className="bg-slate-900 h-screen w-full">
            <div className="md:w-4/5 lg:max-w-3xl xl:max-w-[1000px] mx-auto h-full px-6 flex flex-col justify-center items-start">
                <p className="text-base text-sky-300">Hi, my name is</p>
                <h1 className="text-4xl md:text-7xl font-bold text-[#ccd6f6]">Ayomide M. Oguntuase</h1>
                <h3 className="text-4xl md:text-7xl font-bold text-[#8892b0]">I'm a Front-End Developer</h3>
                <p className="max-w-2xl text-[#8892b0] mt-6">I'm a front-end developer that specializes in crafting pleasing, responsive web UIs to satisfy business and customer needs</p>

                <Link>
                    <button className="text-white mt-6 border-2 px-6 py-3 hover:bg-sky-700 hover:border-sky-700 group">
                        View  Work
                        <HiArrowNarrowRight className="inline ml-2 group-hover:rotate-90 duration-300" />
                    </button>
                </Link>
            </div>

        </div>
    )
}

export default Hero