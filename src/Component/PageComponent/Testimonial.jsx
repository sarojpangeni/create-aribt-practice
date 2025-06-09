import React from 'react';
import person1 from "../../assets/person_2.jpg.webp";
import person2 from "../../assets/person_3.jpg.webp";
import person3 from "../../assets/person_4.jpg.webp";
import person4 from "../../assets/person_5.jpg.webp";
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";

const testimonials = [
    {
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt, neque fugit, tempora quia temporibus amet rerum eveniet voluptatem iste labore aliquam exercitationem sint cum, dolorem dolor dolorum asperiores nisi!",
        name: "John Smith",
        image: person1,
    },
    {
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt, neque fugit, tempora quia temporibus amet rerum eveniet voluptatem iste labore aliquam exercitationem sint cum, dolorem dolor dolorum asperiores nisi!",
        name: "Michael Stone",
        image: person2,
    },
    {
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt, neque fugit, tempora quia temporibus amet rerum eveniet voluptatem iste labore aliquam exercitationem sint cum, dolorem dolor dolorum asperiores nisi!",
        name: "Robert Spears",
        image: person3,
    },
    {
        quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse sunt, neque fugit, tempora quia temporibus amet rerum eveniet voluptatem iste labore aliquam exercitationem sint cum, dolorem dolor dolorum asperiores nisi!",
        name: "Christine Aguilar",
        image: person4,
    },
];

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

function Testimonial() {
    return (
        <div className="py-12 bg-white">
            <h2 className="text-6xl text-center mb-8">Testimonials</h2>
            <Carousel
                arrows={false}
                autoPlaySpeed={3000}
                infinite
                showDots
                keyBoardControl
                pauseOnHover
                swipeable
                draggable
                responsive={responsive}
                containerClass="container mx-auto px-4"
                itemClass="px-4"
            >
                {testimonials.map((item, index) => (
                    <div key={index} className="bg-white p-8 rounded-md max-w-2xl mx-auto text-center">
                        <p className="text-gray-600 mb-6 italic">"{item.quote}"</p>
                        <div className="flex items-center justify-center gap-3 text-xl font-light">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-16 h-16 rounded-full object-cover mb-2 "
                            />
                            <p className=" text-sm font-light">{item.name}</p>
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default Testimonial;
