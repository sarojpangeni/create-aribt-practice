import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Component/Footer/Footer'
import Header from '../Component/Navigation/Header'
import SubHeader from '../Component/Navigation/SubHeader'
import backgroundImage from "../assets/hero_1.jpg.webp"

function Layout() {
    return (
        <div>
            <img
                src={backgroundImage}
                alt="background"
                className='fixed w-full h-full -z-50 top-0 right-0 left-0'
            />
                <SubHeader />
                <Header />
            <div>
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout