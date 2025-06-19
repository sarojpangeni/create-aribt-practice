import React from 'react'
import { Link } from 'react-scroll'

function Header() {
    const NavItems = [
        { title: "Home", path: "home" },
        { title: "Work", path: "work" },
        { title: "Services", path: "services" },
        { title: "About", path: "about" },
        { title: "Blog", path: "blog" },
        { title: "Contact", path: "contact" },
    ];

    return (
        <div className='sticky bg-white z-50 top-0 md:px-32 py-6 shadow'>
            <div className='flex items-center justify-between'>
                <div className='text-4xl px-2 md:px-0 font-poppins'>
                    Create<span className='text-green-200'>.</span>
                </div>
                <div className='md:flex hidden md:gap-12 gap-2'>
                    {
                        NavItems.map((value, index) => (
                            <Link
                                key={index}
                                to={value.path}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="cursor-pointer font-semibold hover:text-green-200"
                                activeClass="text-green-400"
                                spy={true}
                            >
                                {value.title}
                            </Link>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Header;
