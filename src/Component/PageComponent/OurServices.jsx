import React from 'react'
import { FaCopy, FaLaptop, FaMobileAlt, FaPuzzlePiece, FaUmbrellaBeach } from 'react-icons/fa';
import { FaComputer, FaWebAwesome, FaWebflow } from 'react-icons/fa6';
import { IoIosKey } from 'react-icons/io';
import { IoCartOutline, IoChatbox } from 'react-icons/io5';
import { MdFormatPaint, MdLaptopChromebook, MdMobileScreenShare } from 'react-icons/md';

function OurServices() {
    const detail = [
        {
            logo: <FaLaptop />,
            topic: "Web Design",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
        },
        {
            logo: <IoCartOutline />,
            topic: "eCommerce",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
        },
        {
            logo: <IoChatbox />,
            topic: "Web Applications",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
        },
        {
            logo: <MdFormatPaint />,
            topic: "Branding",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
        },
        {
            logo: <FaPuzzlePiece />,
            topic: "Copy Writing",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
        },
        {
            logo: <FaMobileAlt />,
            topic: "Mobile Applications",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis molestiae vitae eligendi at.",
        },
    ];
    return (
        <div className='py-12 bg-white'>
            <div className='text-center mb-10'>
                <h2 className='text-4xl font-semibold'>Our Services</h2>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-7xl mx-auto'>
                {detail.map((value, index) => (
                    <div key={index}
                        className='p-6 gap-1 flex items-start space-x-2'>
                        <div className='mb-4 text-3xl  items-center justify-center text-green-400'>
                            {value.logo}
                        </div>
                        <div>
                            <h3 className='text-xl font-semibold mb-2 text-gray-600'>
                                {value.topic}
                            </h3>
                            <p className='text-gray-500 mb-4'>
                                {value.description}
                            </p>
                            <button className='text-green-400 font-medium hover:underline'>
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OurServices