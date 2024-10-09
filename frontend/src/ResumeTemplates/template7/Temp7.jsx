import React from 'react';
import './temp7.css'; 

const Temp7 = ({ formData }) => {
  return (
    <div className='temp'>
    <div className="containers">
      {/* Left Sidebar */}
      <div className="left-sidebar">
        <h1>{formData.name}</h1>
        <p>{formData.address}</p>
        <p>{formData.contactNo}</p>
        <p>{formData.email}</p>

        {/* Education Section */}
        <div className="education">
          <h3>Education</h3>
          {formData.education.map((edu, index) => (
            <p key={index}>{edu}</p>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="certifications">
          <h3>Certifications</h3>
          <ul>
            {formData.certificates.map((certification, index) => (
              <li style={{color:'black'}} key={index}><p>{certification}</p></li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Professional Summary */}
        <div className="section">
          <h2>Professional Summary</h2>
          <p>{formData.professionalSummary}</p>
        </div>

        {/* Work History */}
        <div className="section">
          <h2>Work History</h2>
          {formData.workHistory.map((job, index) => (
            <div key={index} className="job">
              <p><strong>{job.position}</strong>, {job.company}, {job.location}</p>
              <p><em>{job.startDate} - {job.endDate || 'Present'}</em></p>
              <ul>
  {job.responsibilities && job.responsibilities.split('\n').map((resp, idx) => (
    <li key={idx}>{resp}</li>
  ))}
</ul>
            </div>
          ))}
        </div>

        {/* Projects Section */}
        <div className="section">
          <h2>Projects</h2>
          {formData.projects.map((project, index) => (
            <div key={index} className="project">
              <ul>
                
                  <li >{project}</li>
                
              </ul>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="section skills">
          <h2>Skills</h2>
          <ul>
            {formData.skills.map((skill, index) => (
              <li>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Temp7;
