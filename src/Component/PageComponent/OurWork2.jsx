import React from 'react';
import { FaCopy, FaUmbrellaBeach } from 'react-icons/fa';
import { IoIosKey } from 'react-icons/io';
import { MdFormatPaint } from 'react-icons/md';
import image from "../../assets/about_1.webp"


function OurWork2() {
    const detail = [
        {
            icon: <FaUmbrellaBeach />,
            topic: "Strategy",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.",
        },
        {
            icon: <IoIosKey />,
            topic: "Web Development",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.",
        },
        {
            icon: <MdFormatPaint />,
            topic: "Art Direction",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.",
        },
        {
            icon: <FaCopy />,
            topic: "Copywriting",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam nesciunt.",
        },
    ]
    return (
        <div className='flex bg-white h-full w-full py-16 p-16'>
            <div className='flex bg-black items-center justify-center mx-10'>
                <div className='p-8'>
                    <img
                        src={image}
                        alt="image"
                        className='object-cover'
                    />
                </div>
                <div className='text-white grid-cols-2 grid p-8 m-4 gap-4'>
                    {
                        detail.map((value, index) => (
                            <div
                                key={index}
                                className='flex flex-col gap-2 text-justify'>
                                <div className='text-2xl flex gap-2'>
                                    {value.icon}
                                    <div className='font-medium text-lg '>
                                        {value.topic}
                                    </div>
                                </div>
                                <div className='flex flex-col text-sm text-gray-500 w-2/3'>
                                    {value.description}
                                    <button className='underline cursor-pointer text-white text-sm text-start'>Read More</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default OurWork2