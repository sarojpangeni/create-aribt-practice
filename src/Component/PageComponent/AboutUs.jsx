import React from 'react'
import { FaMobileAlt, FaPuzzlePiece } from 'react-icons/fa'
import image from "../../assets/about_1.webp"

function AboutUs() {
    const detail = [
        {
            logo: <FaMobileAlt />,
            topic: "Web & Mobile Specialties",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis.",
        },
        {
            logo: <FaPuzzlePiece />,
            topic: "Intuitive Thinkers",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis.",
        },
    ]
    return (
        <div className='bg-white py-12 px-18'>
            <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center'>
                <div>
                    <h1 className='text-4xl font-semibold text-gray-600 mb-10'>About Us</h1>
                    <p className='text-gray-500 mb-8 text-lg'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, cum veniam alias adipisci nostrum corrupti saepe deserunt ad perferendis voluptatibus asperiores fugiat laudantium et, temporibus perspiciatis pariatur deleniti minus consequuntur.
                    </p>
                    <div className='space-y-6'>
                        {detail.map((value, index) => {
                            return (
                                <div key={index}
                                    className='text-lg font-semibold '>
                                    <div className='text-4xl text-gray-400 mb-2'>
                                        {value.logo}
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-semibold text-gray-600">{value.topic}</h4>
                                        <p className="text-gray-500 mb-2 font-light">{value.description}</p>
                                        <button className="text-green-400 hover:underline font-light text-lg">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
                <div className='w-full'>
                    <img
                        src={image}
                        alt="image"
                        className='rounded-lg shadow-md w-full object-cover max-h-[500px]' />
                </div>
            </div>
        </div>
    )
}

export default AboutUs