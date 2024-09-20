import React from 'react'
import './banner.css'
import CustomButton from './CustomButton'
const Banner = ({banner_img}) => {
  function handliClick() {
    location.href="#cardCarousel"
  }
  return (
    <>
    <div className="whole " >

    
    <div className='flexer'>
        <div className='banner-image'>
        <img src={banner_img}  alt='cannot load' />
        </div>
        <div className="banner-text">
            <h1>The Best Online<br></br> Resume Builder</h1>
            <h3 style={{color:"brown"}}>Easily create the perfect resume for any job using our best-in-class resume builder platform.</h3>
            <CustomButton handleClick={handliClick} text="CREATE NOW"/>
            <h3>25% more offers</h3>
            <h5 style={{marginBottom:"10px"}}>Subscribed and hired by:*</h5>
            <img src="https://www.resumebuilder.com/wp-content/uploads/2023/12/black-logo-1.svg" alt="Floating Logo" class="floating-image"></img>
        </div>    
    </div>
    <div className='container a'>
    <p className='a'>Our online resume builder offers a quick and easy way to create your professional resume from 25+ design templates. Create a resume using our AI resume builder feature, plus take advantage of expert suggestions and customizable modern and professional resume templates. Free users have access to our easy-to-use tool and TXT file downloads.</p>
    </div>
    </div>
    </>
  )
}

export default Banner
