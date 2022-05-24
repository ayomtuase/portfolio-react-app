import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Hero = () => {
    return (
        <div className="bg-[#0a192f] h-screen w-full">
            <div className="h-full px-6 flex flex-col justify-center items-start">
                <p className="text-base text-sky-300">Hi, my name is</p>
                <h1 className="text-4xl font-bold text-[#ccd6f6]">Ayomide M. Oguntuase</h1>
                <h3 className="text-4xl font-bold text-[#8892b0]">I'm a Front-End Developer</h3>
                <p className="text-[#8892b0] mt-6">I'm a front-end developer that specializes in crafting pleasing, responsive web UIs to satisfy business and customer needs</p>

                <button className="text-white mt-6 border-2 px-6 py-3"> View  Work<HiArrowNarrowRight className="inline ml-2" /> </button>

            </div>

        </div>
    )
}

export default Hero