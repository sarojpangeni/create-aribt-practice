import React from 'react'
import { MdOutlineDone } from 'react-icons/md'

function Inovate() {
    const InovateData = [
        {
            id: "01",
            title: "Inovate",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.",
            items: [
                "Customer Experience",
                "Product Management",
                "Proof of Concept"
            ],
        },
        {
            id: "02",
            title: "Create",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.",
            items: ["Web Design", "Branding", "Web & App Development"],
        },
        {
            id: "03",
            title: "Scale",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et praesentium eos nulla qui commodi consectetur beatae fugiat. Veniam iste rerum perferendis.",
            items: ["Social Media", "Paid Campaigns", "Marketing & SEO"],
        },
    ]
    return (
        <div className='bg-white py-20 h-full w-full'>
            <div className='md:flex gap-20 md:mx-32 mx-12 mt-12 md:items-center md:justify-between md:text-start'>
                {InovateData.map((value, index) => {
                    return (
                        <div key={index}
                        className='relative'
                        >
                            <div className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/3 text-8xl transform font-bold text-gray-200'>
                                {value.id}
                            </div>
                            <div className='relative font-light'>
                                <h3 className='text-4xl font-medium mb-3 text-green-300'>
                                    {value.title}
                                </h3>
                                <p className='text-gray-800 mb-5 text-justify tracking-tight'>
                                    {value.description}
                                </p>
                                <ul className='text-left flex-col gap-2 flex'>
                                    {value.items.map((val, i) => (
                                        <li
                                        key={i}
                                        className='flex items-center gap-2'
                                        >
                                            <div><MdOutlineDone /></div>
                                            <div>{val}</div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Inovate