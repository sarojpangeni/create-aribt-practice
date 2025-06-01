import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    const NavItems = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Work",
            path: "/work",
        },
        {
            title: "Services",
            path: "/services",
        },
        {
            title: "About",
            path: "/about",
        },
        {
            title: "Blog",
            path: "/blog",
        },
        {
            title: "Contact",
            path: "/contact",
        },
    ]
    return (
        <div className='absolute  bg-white z-50 left-0 right-0 top-10  h-fit md:px-32 py-6'>
            <div className='flex items-center justify-between'>
                <div className='text-4xl px-2 md:px-0  font-poppins'>Create
                    <span className='text-green-200'>.</span>
                </div>
                <div className='md:flex hidden md:gap-12 gap-2'>
                    {
                        NavItems.map((value, index) => {
                            return (
                                <div
                                    key={index}
                                    className='font-semibold hover:text-green-200'>
                                    <NavLink
                                        to={value.path}
                                        className={({ isActive }) =>
                                            isActive ? "text-green-400" : "text-black"}>
                                        {value.title}
                                    </NavLink>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Header