import React from 'react'
import './home.css'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import { CardCarousel } from '../components/CardCarousel'
import WhyBuild from '../components/WhyBuild'
const Home = () => {

  return (
    <div className='b1'>
      <Navbar/>
      <Banner banner_img="https://www.resume.com/static/9fbc5af46909a5571f95e8bdbba84a30/4588f/resume-group.webp"/>
      <CardCarousel/>
      <WhyBuild/>
    </div>
  )
}

export default Home
