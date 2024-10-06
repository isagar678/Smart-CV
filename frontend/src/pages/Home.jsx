import React from 'react'
import '../CSS/home.css'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import { CardCarousel } from '../components/CardCarousel'
import WhyBuild from '../components/WhyBuild'

const Home = () => {

  return (
    <div className='b1' >
      <Navbar/>
      <Banner />
      <CardCarousel/>
      <WhyBuild/>
    
        </div>
  )
}

export default Home
