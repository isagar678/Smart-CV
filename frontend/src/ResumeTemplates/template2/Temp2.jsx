import React from 'react';
import './temp2.css';

const Temp2 = ({ formData }) => {
  return (
    <div className="resume-template">
      <div className="resume-header">
        <h1>{formData.name}</h1>
        <p>{formData.email} | {formData.contactNo} | {formData.address}</p>
      </div>

      <div className="section">
        <h3 className="section-title">PROFESSIONAL SUMMARY</h3>
        <div className="summary">
          <p>{formData.professionalSummary}</p>
        </div>
      </div>

      <div className="section work-history">
        <h3 className="section-title">WORK HISTORY</h3>
        {formData.workHistory.map((job, index) => (
          <div key={index} className="work-item">
            <h3>{job.company}, {job.location}</h3>
            <p className="company">{job.position} | {job.startDate} - {job.endDate || 'Present'}</p>
            <ul>
  {job.responsibilities && job.responsibilities.split('\n').map((resp, idx) => (
    <li key={idx}>{resp}</li>
  ))}
</ul>
          </div>
        ))}
      </div>

      <div className="section skills">
        <h3 className="section-title">SKILLS</h3>
        <ul>
          {formData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>

      <div className="section education">
        <h3 className="section-title">EDUCATION</h3>
        <ul>
          {formData.education.map((edu, index) => (
            <li key={index}>{edu}</li>
          ))}
        </ul>
      </div>

      <div className="section certifications">
        <h3 className="section-title">CERTIFICATIONS</h3>
        <ul>
          {formData.certificates.map((certificate, index) => (
            <li key={index}>{certificate}</li>
          ))}
        </ul>
      </div>
      <div className="section certifications">
        <h3 className="section-title">PROJECTS</h3>
        <ul>
          {formData.projects.map((certificate, index) => (
            <li key={index}>{certificate}</li>
          ))}
        </ul>
      </div>

      <div className="footer">
        <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Temp2;
