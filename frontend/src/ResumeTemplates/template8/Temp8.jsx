import React from 'react';
import './temp8.css';

const Temp8 = ({ formData }) => {
  return (
    <div className="resume-hill container">
      <div className="resume-hill__sidebar">
        <h2 className="resume-hill__name">{formData.name}</h2>
        <p className="resume-hill__contact">{formData.email}</p>
        <p className="resume-hill__contact">{formData.contactNo}</p>
        <p className="resume-hill__location">{formData.address}</p>

        {formData.professionalSummary && (
          <div className="resume-hill__section">
            <h4 className="resume-hill__section-title">Summary</h4>
            <p>{formData.professionalSummary}</p>
          </div>
        )}

        {formData.education && formData.education.length > 0 && (
          <div className="resume-hill__section">
            <h4 className="resume-hill__section-title">Education</h4>
            {formData.education.map((edu, index) => (
              <p key={index}>{edu}</p>
            ))}
          </div>
        )}

        {formData.certifications && formData.certifications.length > 0 && (
          <div className="resume-hill__section">
            <h4 className="resume-hill__section-title">Certificates</h4>
            <ul>
              {formData.certifications.map((cert, index) => (
                <li key={index}>{cert}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="resume-hill__main">
        {formData.workHistory && formData.workHistory.length > 0 && (
          <div className="resume-hill__section">
            <h4 className="resume-hill__section-title">Relevant Experience</h4>
            {formData.workHistory.map((job, index) => (
              <div key={index} className="resume-hill__job">
                <p><strong>{job.position}</strong>, {job.company}</p>
                <p>{job.location} | {job.startDate} - {job.endDate || 'Present'}</p>
                <ul>
                  {job.responsibilities && job.responsibilities.split('\n').map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        {formData.projects && formData.projects.length > 0 && (
          <div className="resume-hill__section">
            <h4 className="resume-hill__section-title">Projects</h4>
            <ul>
              {formData.projects.map((project, index) => (
                <li key={index}>{project}</li>
              ))}
            </ul>
          </div>
        )}

        {formData.skills && formData.skills.length > 0 && (
          <div className="resume-hill__section">
            <h4 className="resume-hill__section-title">Skills</h4>
            <ul>
              {formData.skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Temp8;
