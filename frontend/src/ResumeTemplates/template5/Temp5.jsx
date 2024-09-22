import React from 'react';
import './temp5.css';

const Temp5 = ({ formData }) => {
  return (
    <div className="resume-kendra container">
      <div className="resume-kendra__header">
        <div className="resume-kendra__header-content text-center">
          <h1 className="resume-kendra__header-title">{formData.name}</h1>
          <p className="resume-kendra__header-contact">
            {formData.address} | {formData.contactNo} | {formData.email}
          </p>
        </div>
      </div>

      <div className="resume-kendra__section">
        <div className="resume-kendra__content">
          <h4 className="resume-kendra__section-title">Professional Summary</h4>
          <p>{formData.professionalSummary}</p>
        </div>
      </div>

      <div className="resume-kendra__section">
        <div className="resume-kendra__content">
          <h4 className="resume-kendra__section-title">Work History</h4>
          {formData.workHistory.map((job, index) => (
            <div key={index} className="resume-kendra__job">
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
      </div>

      <div className="resume-kendra__section">
        <div className="resume-kendra__content">
          <h4 className="resume-kendra__section-title">Skills</h4>
          <ul>
            {formData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="resume-kendra__section">
        <div className="resume-kendra__content">
          <h4 className="resume-kendra__section-title">Projects</h4>
          <ul>
            {formData.projects.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="resume-kendra__section">
        <div className="resume-kendra__content">
          <h4 className="resume-kendra__section-title">Education</h4>
          {formData.education.map((edu, index) => (
            <p key={index}>{edu}</p>
          ))}
        </div>
      </div>

      <div className="resume-kendra__section">
        <div className="resume-kendra__content">
          <h4 className="resume-kendra__section-title">Certifications</h4>
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

export default Temp5;
