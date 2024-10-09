import React from 'react';
import './temp4.css';

const Temp4 = ({ formData }) => {
  return (
    <div className="resume-abigail container">
      <div className="resume-abigail__header text-center">
        <h1 className="resume-abigail__header-title" style={{color:'white'}}>{formData.name}</h1>
        <p style={{color:'white'}} className="resume-abigail__header-contact">
          {formData.email} | {formData.contactNo} | {formData.address}
        </p>
      </div>

      {formData.professionalSummary && (
        <div className="resume-abigail__section">
          <h4 className="resume-abigail__section-title"><b>Summary</b></h4>
          <p>{formData.professionalSummary}</p>
        </div>
      )}

      {formData.workHistory && formData.workHistory.length > 0 && (
        <div className="resume-abigail__section">
          <h4 className="resume-abigail__section-title">Experience</h4>
          {formData.workHistory.map((job, index) => (
            <div key={index} className="resume-abigail__job">
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
      )}

      {formData.education && formData.education.length > 0 && (
        <div className="resume-abigail__section">
          <h4 className="resume-abigail__section-title">Education</h4>
          {formData.education.map((edu, index) => (
            <p key={index}>{edu}</p>
          ))}
        </div>
      )}

      {formData.projects && formData.projects.length > 0 && (
        <div className="resume-abigail__section">
          <h4 className="resume-abigail__section-title">Key Achievements</h4>
          <ul>
            {formData.projects.map((achievement, index) => (
              <li key={index}>{achievement}</li>
            ))}
          </ul>
        </div>
      )}

      {formData.skills && formData.skills.length > 0 && (
        <div className="resume-abigail__section">
          <h4 className="resume-abigail__section-title">Skills</h4>
          <ul>
            {formData.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      )}

      {formData.certifications && formData.certifications.length > 0 && (
        <div className="resume-abigail__section">
          <h4 className="resume-abigail__section-title">Certification</h4>
          <ul>
            {formData.certifications.map((certification, index) => (
              <li key={index}>{certification}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Temp4;
