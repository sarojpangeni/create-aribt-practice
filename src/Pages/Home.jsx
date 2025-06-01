import React from 'react'
import Banner from '../Component/PageComponent/Banner'
import Inovate from '../Component/PageComponent/Inovate'
import OurWork from '../Component/PageComponent/OurWork'
import OurWork2 from '../Component/PageComponent/OurWork2'
import Testimonial from '../Component/PageComponent/Testimonial'
import OurServices from '../Component/PageComponent/OurServices'
import AboutUs from '../Component/PageComponent/AboutUs'

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
    </div>
  )
}

export default Home