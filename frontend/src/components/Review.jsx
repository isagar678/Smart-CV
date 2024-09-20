import React, { useContext,useEffect } from 'react'

// import '../templates/static/t1.css'
const Review = ({formData}) => {
  return (
    <div>
      
<div className="resume-container">
    <div className="header">
        <h1>{formData.name}</h1>
        <div className="section address">
        <p>{formData.address}</p>
    </div>
    </div>

    <div className="section objective">
        <h2>Professional Summary</h2>
        <p>{formData.professionalSummary}</p>
    </div>

    <div className="section skills">
        <h2>Skills</h2>
        <ul>
            {formData.skills.map((skill)=>{
                return <li>{skill}</li>
            })}          
        </ul>
    </div>

    <div className="section projects">
        <h2>Projects</h2>
        <ul>
        <li>{formData.projects}</li>
        <li>{formData.projects}</li>
            
        </ul>
    </div>

    <div className="section work-history">
        <h2 contentEditable>Work History</h2>
        <div className="job">
            <h3>Retail Sales Associate</h3>
            <p>TechStyle Fashion Group, Sandusky, OH</p>
            <p>03/2023 - Current</p>
            <ul>
                <li>Processed returns, exchanges, and assisted customers in product selection.</li>
                <li>Educated over 10 customers daily on product features and benefits.</li>
                <li>Negotiated pricing to finalize sales agreements.</li>
                <li>Assessed assigned areas to ensure organization and presentation.</li>
            </ul>
        </div>
        <div className="job">
            <h3>Part-Time Retail Associate</h3>
            <p>TechStyle Fashion Group, Sandusky, OH</p>
            <p>02/2021 - 02/2022</p>
        </div>
    </div>

    <div className="section education">
        <h2>Education</h2>
        <ul>
        <li>{formData.education}</li>
        
            </ul>
    </div>

    <div className="section certificates">
        <h2>Certificates</h2>
        <ul>
            {formData.certificates.map((certificate)=>{
                return <li>{certificate}</li>
            })}
        </ul>
    </div>

    
</div>




    </div>
  )
}

export default Review
