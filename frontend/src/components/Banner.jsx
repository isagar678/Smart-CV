import React from 'react'
import '../CSS/banner.css'
import { companylist,icon} from '../images'
import CustomButton from './CustomButton'
const Banner = () => {
  function handliClick() {
    location.href="#cardCarousel"
  }

  return (
    
    <div className="whole " >

    
    <div className='flexer'>
        <div className='banner-image'>
        <img src={icon}  alt='cannot load' />
        </div>
        <div className="banner-text">
            <h1>The Best Online<br></br> Resume Builder</h1>
            <h3 style={{color:"brown"}}>Easily create the perfect resume for any job using our best-in-class resume builder platform.</h3>
            <CustomButton style={{
    animation: 'shake-bottom 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both',
    WebkitAnimation: 'shake-bottom 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both',
  }} handleClick={handliClick} text="CREATE NOW"/>
            <h3>25% more offers</h3>
            <h5 style={{marginBottom:"10px"}}>Subscribed and hired by:*</h5>
            <img src={companylist} alt="Floating Logo" className="floating-image"></img>
        </div>    
    </div>
    <div className='container a'>
    <p className='a'>Our online resume builder offers a quick and easy way to create your professional resume from 25+ design templates. Create a resume using our AI resume builder feature, plus take advantage of expert suggestions and customizable modern and professional resume templates. Free users have access to our easy-to-use tool and TXT file downloads.</p>
    </div>
    </div>
    
  )
}

export default Banner
