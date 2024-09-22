import React from 'react';
import './temp1.css';

const Temp1 = ({ formData }) => {
  return (
    <div className="resumes resume-container1 mt-5 p-4">
      <div className="row text-center">
        <div className="col-12">
          <h1 className="resume-name">{formData.name}</h1>
          <p className="resume-contact">
            {formData.email} | {formData.contactNo} | {formData.address}
          </p>
        </div>
      </div>  

      <div className="row mt-4">
        <div className="col-12">
          <h3 className="section-title">PROFESSIONAL SUMMARY</h3>
          <p className="resume-summary">{formData.professionalSummary}</p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <h3 className="section-title">WORK HISTORY</h3>
          {formData.workHistory.map((job, index) => (
            <div key={index} className="job-section">
              <h5>{job.company}, {job.location}</h5>
              <p className="job-date">{job.position} | {job.startDate} - {job.endDate || 'Present'}</p>
              <ul>
  {job.responsibilities && job.responsibilities.split('\n').map((resp, idx) => (
    <li key={idx}>{resp}</li>
  ))}
</ul>
            </div>
          ))}
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <h3 className="section-title">SKILLS</h3>
          <ul className="skills-list">
            {formData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        
          <h3 className="section-title">EDUCATION</h3>
          <ul>          
          {formData.education.map((edu) => (
            <li>{edu}</li>
          ))}
          </ul>


          <h3 className="section-title">CERTIFICATIONS</h3>
          <ul>          
          {formData.certificates.map((edu) => (
            <li>{edu}</li>
          ))}
          </ul>

          <h3 className="section-title">PROJECTS</h3>
          <ul>          
          {formData.projects.map((edu) => (
            <li>{edu}</li>
          ))}
          </ul>
        
      </div>
    </div>
  );
};

export default Temp1;
