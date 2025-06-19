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
      <section id='home'>
        <Banner />
      </section>
      <section id='inovate '>
        <Inovate />
      </section>
      <section id='work'>
        <OurWork />
        <OurWork2 />
      </section>
      <section id='testimonial'>
        <Testimonial />
      </section>
      <section id='services'>
        <OurServices />
      </section>
      <section id='about'>
        <AboutUs />
      </section>
      <section team>
        <OurTeam />
      </section>
      <section id='blog'>
        <Blog />
      </section>
      <section id='contact'>
        <ContactUs />
      </section>

    </div>
  )
}

export default Home