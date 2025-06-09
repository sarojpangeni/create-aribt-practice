import React from 'react';
import image1 from '../../assets/img_1.jpg.webp';
import image2 from '../../assets/img_2.jpg.webp';

function Blog() {
    const detail = [
        {
            image: image1,
            title: 'Create Beautiful Website In Less Than An Hour',
            details: [{ name: 'Ham Brook', date: 'Jan 18, 2019', type: 'News' }],
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.',
        },
        {
            image: image2,
            title: 'Create Beautiful Website In Less Than An Hour',
            details: [{ name: 'James Phelps', date: 'Jan 18, 2019', type: 'News' }],
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.',
        },
        {
            image: image1,
            title: 'Create Beautiful Website In Less Than An Hour',
            details: [{ name: 'James Phelps', date: 'Jan 18, 2019', type: 'News' }],
            description:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eligendi nobis ea maiores sapiente veritatis reprehenderit suscipit quaerat rerum voluptatibus a eius.',
        },
    ];

    return (
        <div className="py-12 px-4 md:px-10 bg-white">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-6xl mb-10 text-center">Blog</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {detail.map((value, index) => (
                        <div
                            key={index}
                            className="bg-white overflow-hidden transition-transform"
                        >
                            <img
                                src={value.image}
                                alt="blog"
                                className="w-full h-82 object-cover" />
                            <div className="p-5">
                                <h2 className="text-xl text-green-300 font-semibold mb-2">{value.title}</h2>
                                <div className="flex items-center text-sm text-gray-500 space-x-2 mb-4">
                                    {value.details.map((val, i) => (
                                        <React.Fragment key={i}>
                                            <span>{val.name}</span>
                                            <span>•</span>
                                            <span>{val.date}</span>
                                            <span>•</span>
                                            <span className='text-green-400'>{val.type}</span>
                                        </React.Fragment>
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-4">{value.description}</p>
                                <button className="text-green-300 py-2 rounded  transition">
                                    Continue Reading...
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Blog;
