import React from 'react';
import './temp3.css'; // Ensure this points to the correct CSS file

const Temp3 = ({ formData }) => {
  return (
    <div className="resumes container mt-5 resume-container3">
      <div className="row">
        <div className="col-12 text-center">
          <h1>{formData.name}</h1>
          <p>{formData.contactNo} • {formData.email} • {formData.address}</p>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <h3 className="section-title">PROFESSIONAL SUMMARY</h3>
          <p>
            {formData.professionalSummary}
          </p>
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
      </div>

      <div className="row mt-4">
        <div className="col-12">
          <h3 className="section-title">WORK HISTORY</h3>
          {formData.workHistory.map((job, index) => (
            <div key={index} className="job-section">
              <p className="job-date">{job.startDate} - {job.endDate || 'Present'} • {job.location}</p>
              <h5>{job.position} / {job.company}</h5>
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
          <h3 className="section-title">EDUCATION</h3>
          <ul>
          {formData.education.map((edu, index) => (
            <li key={index}>{edu}</li>
          ))}
        </ul>
        </div>
      </div>

      <div className="row mt-4">
      <h3 className="section-title">CERTIFICATIONS</h3>
        <ul>
          {formData.certificates.map((certificate, index) => (
            <li key={index}>{certificate}</li>
          ))}
        </ul>
        <div className="row mt-4">
      <h3 className="section-title">PROJECTS</h3>
        <ul>
          {formData.projects.map((certificate, index) => (
            <li key={index}>{certificate}</li>
          ))}
        </ul>
      </div>
      </div>
    </div>
  );
};

export default Temp3;
