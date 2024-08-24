import React from 'react'
import './banner.css'
import CustomButton from './CustomButton'
const Banner = ({banner_img}) => {
  return (
    <>
    <div className="whole container" >

    
    <div className='flexer'>
        <div className='banner-image'>
        <img src={banner_img} />
        </div>
        <div className="banner-text">
            <h1>The Best Online<br></br> Resume Builder</h1>
            <h3 style={{color:"brown"}}>Easily create the perfect resume for any job using our best-in-class resume builder platform.</h3>
            <CustomButton text="CREATE NOW"/>
            <h3>25% more offers</h3>
            <h5>Subscribed and hired by:*</h5>
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
