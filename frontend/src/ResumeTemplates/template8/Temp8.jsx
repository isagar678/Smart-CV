import React from 'react';
import './temp8.css';

const Temp8 = ({ formData }) => {
  return (
    <div className="resume-temp8-container">
      {/* Left Sidebar */}
      <div className="resume-temp8-left-sidebar">
        <h1 className="resume-temp8-name">{formData.name}</h1>
        <div className="resume-temp8-contact">
          <p>{formData.email}</p>
          <p>{formData.contactNo}</p>
          <p>{formData.address}</p>
        </div>

        <h3 className="resume-temp8-section-title">Summary</h3>
        <p>{formData.professionalSummary}</p>

        <h3 className="resume-temp8-section-title">Education</h3>
        {formData.education.map((edu, index) => (
          <p key={index}>{edu}</p>
        ))}

        <h3 className="resume-temp8-section-title">Certificates</h3>
        <ul className="resume-temp8-list">
          {formData.certificates.map((certificate, index) => (
            <li key={index}>{certificate}</li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div className="resume-temp8-main-content">
        <h2 className="resume-temp8-main-header">Relevant Experience</h2>
        {formData.workHistory.map((exp, index) => (
          <div className="resume-temp8-section" key={index}>
            <h4 className="resume-temp8-subheader">
              {exp.position}, {exp.company}
            </h4>
            <p className="resume-temp8-description">
              {exp.location} | {exp.startDate} - {exp.endDate || 'Present'}
            </p>
            <ul>
  {exp.responsibilities && exp.responsibilities.split('\n').map((resp, idx) => (
    <li key={idx}>{resp}</li>
  ))}
</ul>
            <div className="resume-temp8-divider"></div>
          </div>
        ))}

        <h2 className="resume-temp8-main-header">Projects</h2>
        {formData.projects.map((project, index) => (
          <div className="resume-temp8-section" key={index}>
            <ul>
              <li>{project}</li>
            </ul>
            <div className="resume-temp8-divider"></div>
          </div>
        ))}

        <h2 className="resume-temp8-main-header">Skills</h2>
        <ul className="resume-temp8-list">
          {formData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Temp8;
