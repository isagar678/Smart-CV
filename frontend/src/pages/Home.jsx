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
      <Banner banner_img="https://www.livecareer.com/lcapp/uploads/2024/08/easy-to-use.png"/>
      <CardCarousel/>
      <WhyBuild/>
    </div>
  )
}

export default Home
