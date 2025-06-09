import React from 'react';
import image1 from "../../assets/img_1.jpg.webp";
import image2 from "../../assets/img_2.jpg.webp";
import image3 from "../../assets/img_3.jpg.webp";
import image4 from "../../assets/img_4.jpg.webp";
import image5 from "../../assets/img_5.jpg.webp";
import image6 from "../../assets/img_6.jpg.webp";

function OurWork() {
    const images = [image1, image2, image3, image4, image5, image6];

    const details = [
        { title: "Bonzai Tree", type: "Website" },
        { title: "Simple Woman", type: "Branding" },
        { title: "Fruits", type: "Website" },
        { title: "Digital Material", type: "Web Application" },
        { title: "Handy Food", type: "Branding" },
        { title: "Cat with Cup", type: "Website" },
    ];

    return (
        <div className='bg-white w-full h-full py-5'>
            <div className="flex flex-col gap-10 justify-center items-center py-6">
                <h1 className="text-6xl tracking-wider font-poppins">Our Works</h1>
                <p className="w-11/12 md:w-1/2 text-center font-sans text-gray-700 font-light tracking-wide">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores,
                    itaque neque, delectus odio iure explicabo.
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4'>
                {images.map((value, index) => (
                    <div
                        key={index}
                        className='relative group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-500'>
                        <img
                            src={value}
                            alt={details[index]?.title}
                            className='w-full h-96 object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110'
                        />
                        <div className='absolute inset-0 flex flex-col items-center justify-center text-black opacity-0 group-hover:opacity-100 duration-500  transform translate-y-4 group-hover:translate-y-0'>
                            <div className='text-2xl font-semibold'>
                                {details[index]?.title}
                            </div>
                            <div className='text-sm mt-1 tracking-widest uppercase'>
                                {details[index]?.type}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OurWork;
