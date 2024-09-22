import React, { useContext,useEffect } from 'react'


const Review = ({formData}) => {   
    
      return (
        
        
        <div className="resumes resume-template">
          {/* Name */}
        
          <div className="section">
            <h1>{formData.name}</h1>
          </div>
    
          {/* Contact Info */}
          <div className="section contact-info">
            <p><strong>Contact No:</strong> {formData.contactNo}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Address:</strong> {formData.address}</p>
          </div>
    
          {/* Professional Summary */}
          <div className="section summary">
            <h2>Professional Summary</h2>
            <p>{formData.professionalSummary}</p>
          </div>
    
          {/* Skills */}
          <div className="section skills">
            <h2>Skills</h2>
            <ul>
              {formData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
    
          {/* Certificates */}
          <div className="section certificates">
            <h2>Certificates</h2>
            <ul>
              {formData.certificates.map((certificate, index) => (
                <li key={index}>{certificate}</li>
              ))}
            </ul>
          </div>
    
          {/* Work History */}
          <div className="section work-history">
            <h2>Work History</h2>
            {formData.workHistory.map((history, index) => (
              <div key={index} className="work-item">
                <h3>{history.position}</h3>
                <p><strong>{history.company}</strong>, {history.location}</p>
                <p>{history.startDate} - {history.endDate || 'Present'}</p>
                <ul>
                  {history.responsibilities.split('\n').map((line, idx) => (
                    <li key={idx}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
    
          {/* Education */}
          <div className="section education">
            <h2>Education</h2>
            <ul>
              {formData.education.map((edu, index) => (
                <li key={index}>{edu}</li>
              ))}
            </ul>
          </div>
    
          {/* Projects */}
          <div className="section projects">
            <h2>Projects</h2>
            <ul>
              {formData.projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
        </div>
        
        
      );

    
}

export default Review
