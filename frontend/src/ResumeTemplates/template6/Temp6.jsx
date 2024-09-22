import React from 'react';
import './temp6.css';

const Temp6 = ({ formData }) => {
  return (
    <div className="resume-gordon container">
      <div className="resume-gordon__header">
        <div className="resume-gordon__header-content text-center">
          <h1 className="resume-gordon__name">
            {formData.name} <span className="resume-gordon__highlight">{formData.lastName}</span>
          </h1>
          <p className="resume-gordon__contact">
            {formData.address} | {formData.contactNo} | {formData.email}
          </p>
        </div>
      </div>

      <div className="resume-gordon__section">
        <div className="resume-gordon__content">
          <h4 className="resume-gordon__section-title">Professional Summary</h4>
          <p>{formData.professionalSummary}</p>
        </div>
      </div>

      <div className="resume-gordon__section">
        <div className="resume-gordon__content">
          <h4 className="resume-gordon__section-title">Work History</h4>

          {formData.workHistory.map((job, index) => (
            <div key={index} className="resume-gordon__job">
              <p>
                <strong>{job.position}</strong>, {job.company} | {job.location}
              </p>
              <p>
                <em>{job.startDate} - {job.endDate || 'Present'}</em>
              </p>
              <ul>
  {job.responsibilities && job.responsibilities.split(/\s+/).map((resp, idx) => (
    <li key={idx}>{resp}</li>
  ))}
</ul>
            </div>
          ))}
        </div>
      </div>

      <div className="resume-gordon__section">
        <div className="resume-gordon__content">
          <h4 className="resume-gordon__section-title">Skills</h4>
          <ul>
            {formData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="resume-gordon__section">
        <div className="resume-gordon__content">
          <h4 className="resume-gordon__section-title">Projects</h4>
          <ul>
            {formData.projects.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="resume-gordon__section">
        <div className="resume-gordon__content">
          <h4 className="resume-gordon__section-title">Education</h4>
          {formData.education.map((edu, index) => (
            <p key={index}>{edu}</p>
          ))}
        </div>
      </div>

      <div className="resume-gordon__section">
        <div className="resume-gordon__content">
          <h4 className="resume-gordon__section-title">Certifications</h4>
          <ul>
            {formData.certificates.map((certification, index) => (
              <li key={index}>{certification}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Temp6;
