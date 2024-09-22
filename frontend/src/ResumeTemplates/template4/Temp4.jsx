import React from 'react';
import './temp4.css';

const Temp4 = ({ formData }) => {
  return (
    <div className="resumes container resume">
      <div className="row header">
        <div className="col-md-12">
          <h1>{formData.name}</h1>
        </div>
      </div>

      <div className="row contact">
        <div className="col-md-4">
          <h4>Contact</h4>
          <p>{formData.address}</p>
          <p>{formData.contactNo}</p>
          <p>{formData.email}</p>
        </div>

        <div className="col-md-4">
          <h4>Skills</h4>
          <ul>
            {formData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>

        <div className="col-md-4">
          <h4>Certifications</h4>
          <ul>
          {formData.certificates.map((certificate, index) => (
            <li key={index}>{certificate}</li>
            ))}
          </ul>
        </div>
        
      </div>

      <div className="row work-history">
        <div className="col-md-12">
          <h4>Work History</h4>
          {formData.workHistory.map((job, index) => (
            <div key={index} className="job">
              <p><strong>{job.position}</strong>, {job.company}, {job.location}</p>
              <p><em>{job.startDate} to {job.endDate || 'Present'}</em></p>
              <ul>
  {job.responsibilities && job.responsibilities.split('\n').map((resp, idx) => (
    <li key={idx}>{resp}</li>
  ))}
</ul>
            </div>
          ))}
        </div>
      </div>
      <div className="row education">
        <div className="col-md-12">
          <h4>PROJECTS</h4>
          <ul>

          {formData.projects.map((edu, index) => (
            <li key={index}>{edu}</li>
          ))}
          </ul>
        </div>
      </div>

      <div className="row education">
        <div className="col-md-12">
          <h4>Education</h4>
          {formData.education.map((edu, index) => (
            <p key={index}>{edu}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Temp4;
