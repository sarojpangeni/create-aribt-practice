import React from 'react'
import Banner from '../Component/PageComponent/Banner'
import Inovate from '../Component/PageComponent/Inovate'
import OurWork from '../Component/PageComponent/OurWork'
import OurWork2 from '../Component/PageComponent/OurWork2'
import Testimonial from '../Component/PageComponent/Testimonial'
import OurServices from '../Component/PageComponent/OurServices'
import AboutUs from '../Component/PageComponent/AboutUs'
import OurTeam from '../Component/PageComponent/OurTeam'
import Blog from '../Component/PageComponent/Blog'
import ContactUs from '../Component/PageComponent/ContactUs'

function Home() {
  return (
    <div>
        <Banner />
        <Inovate />
        <OurWork />
        <OurWork2 />
        <Testimonial />
        <OurServices />
        <AboutUs />
        <OurTeam />
        <Blog />
        <ContactUs />
    </div>
  )
}

export default Home