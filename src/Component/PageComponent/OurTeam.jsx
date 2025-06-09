import React from "react";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaInstagram,
} from "react-icons/fa";
import person1 from "../../assets/person_2.jpg.webp"
import person2 from "../../assets/person_3.jpg.webp"
import person3 from "../../assets/person_4.jpg.webp"

const teamMembers = [
    {
        name: "John Rooster",
        title: "CO-FOUNDER, PRESIDENT",
        image: person1,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.",
    },
    {
        name: "Tom Sharp",
        title: "CO-FOUNDER, COO",
        image: person2,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.",
    },
    {
        name: "Winston Hodson",
        title: "MARKETING",
        image: person3,
        description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi at consequatur unde molestiae quidem provident voluptatum deleniti quo iste error eos est praesentium distinctio cupiditate tempore suscipit inventore deserunt tenetur.",
    },
];

const OurTeam = () => {
    return (
        <div className="bg-white text-center py-16 px-32">
            <h2 className="text-6xl mb-12">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-4">
                {teamMembers.map((value, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={value.image}
                            alt={value.name}
                            className="w-36 h-36 rounded-full object-cover mb-4"
                        />
                        <h3 className="text-xl font-semibold">{value.name}</h3>
                        <p className="text-sm  text-gray-500 mbvalue-4">{value.title}</p>
                        <p className="text-gray-700 text-md mb-4 px-4">{value.description}</p>
                        <div className="flex gap-4 ">
                            <span className="h-7 w-7 flex bg-gray-600 black items-center justify-center rounded-full">
                                <FaFacebookF className="text-gray-200 cursor-pointer" />
                            </span>
                            <span className="h-7 w-7 flex bg-gray-600 items-center justify-center rounded-full">
                                <FaTwitter className="text-gray-200 cursor-pointer" />
                            </span>
                            <span className="h-7 w-7 flex bg-gray-600 items-center justify-center  rounded-full">
                                <FaLinkedinIn className="text-gray-200 cursor-pointer" />
                            </span>
                            <span className="h-7 w-7 flex bg-gray-600 items-center justify-center rounded-full">
                                <FaInstagram className="text-gray-200 cursor-pointer" />
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurTeam;
