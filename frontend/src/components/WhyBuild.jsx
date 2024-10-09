import React from 'react'
// import '../css/whyBuild.css'
import { pig,grader,bag,d1,d2,d3 } from '../images'
const WhyBuild = () => {
  return (
    
    <div className="great-grand">
    <div className='grand' >

    <h1 >Why build my resume with us?</h1>
    </div>
    <div className='parent' >
        <div className='free'>
            <img src={pig} alt="" />
            <h4>We’re actually free</h4>
            <p>No gimmicks, no freemium features,<br /> no joke. Get everything you need to <br /> build a professional resume that <br /> shows off your best qualities to help <br /> you land your next job</p>
        </div>  
        <div className='free'>
            <img src={grader} alt="" />
            <h4>Personally chosen</h4>
            <p>Highlight your unique strengths <br /> with a tailored resume. Designed to <br /> showcase your skills and <br /> make you stand out to employers.

</p>
        </div>  
        <div className='free'>
            <img src={bag} alt="" />
            <h4>Get hired</h4>
            <p>Land your dream job with a <br /> resume that impresses. <br /> Show off your best qualities <br /> and increase your chances <br /> of getting hired.</p>
        </div>  
    </div>
    <div className="father">

    <div className='d-flex'>
      <div className='text'>
        <span style={{background:"#FFA019",display:"inline-block",height:"5px",width:"72px"}}></span>
        <h4>Professional and <br />
        fresh designs</h4>
        <p>Our collection of resume templates features <br /> designs created by professional graphic artists. You <br />can switch between designs in a single click!</p>
      </div>
      <div>
        <img width="450" height="400" src={d1}  />
      </div>
    </div>
    </div>
    

    <div className="father">

    <div className='d-flex'>
    <div>
        <img width="450" height="400" src={d2}  />
      </div>
      <div className='text'>
        <span style={{background:"#FFA019",display:"inline-block",height:"5px",width:"72px"}}></span>
        <h4>Easy-to-use</h4>
        <p>The resume creator guides you through making a <br /> resume step-by-step. It can help you make a resume <br /> in under 15 minutes.</p>
      </div>
      
    </div>
    </div>
    

    <div className="father">

    <div className='d-flex'>
      <div className='text'>
        <span style={{background:"#FFA019",display:"inline-block",height:"5px",width:"72px"}}></span>
        <h4>Curated on 
        research</h4>
        
        <p>We personally made  <br /> research for you to land a job!</p>
      </div>
      <div>
        <img width="450" height="400" src={d3}  />
      </div>
    </div>
    </div>
    
    </div>
    
  )
}

export default WhyBuild
