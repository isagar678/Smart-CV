import React from 'react'
// import '../css/homer.css'
import Banner from '../components/Banner'
import { CardCarousel } from '../components/CardCarousel'
import WhyBuild from '../components/WhyBuild'

const Home = () => {

  return (
    <div className='b1' >
      
      <Banner />
      <CardCarousel/>
      <WhyBuild/>
    
        </div>
  )
}

export default Home
