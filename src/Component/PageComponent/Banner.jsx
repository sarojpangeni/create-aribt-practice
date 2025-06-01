import React from 'react'
import Typewriter from 'typewriter-effect'

function Banner() {
    return (
        <div className="w-full h-screen  md:overflow-hidden opacity-60 bg-black">
            <div className="relative flex flex-col gap-5 items-center mx-auto top-1/2 text-white text-center z-10 ">
                <div className="text-2xl md:text-5xl font-light tracking-wide font-sans  flex gap-2">
                    <span>We Love To Build </span>
                    <span>
                        <Typewriter
                            options={{
                                loop: true,
                                autoStart: true,
                                delay: 50,
                                deleteSpeed: 30,
                            }}
                            onInit={(typewriter) => {
                                typewriter
                                    .typeString(" Mobile Apps")
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .typeString(" WordPress")
                                    .pauseFor(1500)
                                    .deleteAll()
                                    .start();
                            }}
                        />
                    </span>
                </div>
                <div className='text-xl mb-6'>
                    Free Web Template by <span className='text-green-300 hover:text-gray-400 '>Colorlib</span>
                </div>
                <div>
                    <button className='px-7 py-4 bg-green-400 hover:bg-green-600 text-black rounded-4xl '>
                        <a href=""
                        target='_blank'
                        >
                            <h1 className='font-bold'>Watch Video</h1>
                        </a>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner