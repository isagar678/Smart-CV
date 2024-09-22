import React, { useState } from 'react';
import './Form.css';
import { useParams } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import LiveResume from '../components/LiveResume'


const Form = () => {
  const { rid } = useParams();
  const handleDownload = () => {
    const element = document.querySelector('.resumes'); // Selects the element with 'resumes' class

    if (element) {
      html2pdf()
        .from(element)
        .set({
          filename: 'resume.pdf', // File name for the downloaded PDF
          jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
        })
        .save();
    }
  }; 
  const [formData, setFormData] = useState({
    name: 'Ann Hill',
    skills: ['Sales Expertise', 'Customer Relationship Management', 'Team Leadership'],
    certificates: ['Data Modeling by Coursera', 'JavaScript and Python by Udemy'],
    workHistory: [
      {
        position: 'Retail Sales Associate',
        company: 'TechStyle Fashion Group',
        location: 'Sandusky, OH',
        startDate: '03/2023',
        endDate: 'Present',
        responsibilities: 'Handled customer transactions, returns, and assisted with product inquiries to drive sales.',
      }
    ],
    education: ['Associate of Applied Science in Business Management, Ohio Business College'],
    contactNo: '555-123-4567',
    email: 'ann.hill@example.com',
    address: 'Sarkhej, Ahmedabad, Gujarat, India',
    projects: [
      'Developed a CRM system to enhance customer service and efficiently track orders.',
      'Built an inventory management application to optimize stock levels and reduce product shortages for a small retail business.'
    ],    professionalSummary: 'Reliable and detail-oriented sales associate with exceptional customer service and communication skills, consistently driving sales performance in a fast-paced retail environment.',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleArrayChange = (index, name, value) => {
    const updatedArray = formData[name].map((item, i) => (i === index ? value : item));
    setFormData({
      ...formData,
      [name]: updatedArray
    });
  };

  const addField = (name) => {
    setFormData({
      ...formData,
      [name]: [...formData[name], ''] // Add empty field to the respective array
    });
  };

  const removeField = (name, index) => {
    const updatedArray = formData[name].filter((_, i) => i !== index);
    setFormData({
      ...formData,
      [name]: updatedArray
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="form-div    ">
      <form id="formid"  onSubmit={handleSubmit}>
        <div>
          <label>Name: *</label>
          <input required type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>

        <div>
          <label>Contact No: *</label>
          <input required type="text" name="contactNo" value={formData.contactNo} onChange={handleChange} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </div>

        <div>
          <label>Address:</label>
          <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
        </div>
        <div>
          <label>Professional Summary:</label>
          <textarea name="professionalSummary" value={formData.professionalSummary} onChange={handleChange}></textarea>
        </div>
        
        {/* Skills Section */}
        <div className="skills">
          <label>Skills:</label>
          {formData.skills.map((skill, index) => (
            <div className='input-container' key={index}>
              <input
                type="text"
                value={skill}
                onChange={(e) => handleArrayChange(index, 'skills', e.target.value)}
              />
              <button type="button" className='remove' onClick={() => removeField('skills', index)}>Remove</button>
            </div>
          ))}
          <button type="button"  onClick={() => addField('skills')}>Add Skill</button>
        </div>

        {/* Certificates Section */}
        <div className="certificates">
          <label>Certificates:</label>
          {formData.certificates.map((certificate, index) => (
            <div className='input-container' key={index}>
              <input
                type="text"
                value={certificate}
                onChange={(e) => handleArrayChange(index, 'certificates', e.target.value)}
              />
              <button type="button" className='remove' onClick={() => removeField('certificates', index)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={() => addField('certificates')}>Add Certificate</button>
        </div>

       
<div className="work-history">
  <label>Work History:</label>
  {formData.workHistory.map((history, index) => (
    <div key={index}>
      <label>Position:</label>
      <input
        type="text"
        value={history.position || ''}
        onChange={(e) => handleArrayChange(index, 'workHistory', { ...history, position: e.target.value })}
      />

      <label>Company Name:</label>
      <input
        type="text"
        value={history.company || ''}
        onChange={(e) => handleArrayChange(index, 'workHistory', { ...history, company: e.target.value })}
      />

      <label>Location:</label>
      <input
        type="text"
        value={history.location || ''}
        onChange={(e) => handleArrayChange(index, 'workHistory', { ...history, location: e.target.value })}
      />

      <label>Start Date:</label>
      <input
        type="text"
        value={history.startDate || ''}
        onChange={(e) => handleArrayChange(index, 'workHistory', { ...history, startDate: e.target.value })}
      />

      <label>End Date:</label>
      <input
        type="text"
        value={history.endDate || ''}
        onChange={(e) => handleArrayChange(index, 'workHistory', { ...history, endDate: e.target.value })}
      />

      <label>Key Responsibility:</label>
      <textarea
        value={history.responsibilities || ''}
        onChange={(e) => handleArrayChange(index, 'workHistory', { ...history, responsibilities: e.target.value })}
      />

      <button type="button" className='remove' onClick={() => removeField('workHistory', index)}>Remove</button>
    </div>
  ))}
  <button type="button" onClick={() => addField('workHistory')}>Add Work History</button>
</div>


        {/* Projects Section */}
        <div className="projects">
          <label>Projects:</label>
          {formData.projects.map((project, index) => (
            <div className='input-container' key={index}>
              <input
                type="text"
                value={project}
                onChange={(e) => handleArrayChange(index, 'projects', e.target.value)}
              />
              <button type="button" className='remove' onClick={() => removeField('projects', index)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={() => addField('projects')}>Add Project</button>
        </div>

        {/* Education Section */}
        <div className="education">
          <label>Education:</label>
          {formData.education.map((education, index) => (
            <div className='input-container' key={index}>
              <input
                type="text"
                value={education}
                onChange={(e) => handleArrayChange(index, 'education', e.target.value)}
              />
              <button type="button" className='remove' onClick={() => removeField('education', index)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={() => addField('education')}>Add Education</button>
        </div>

       

    <button onClick={handleDownload}>Download</button>

        
      </form>

      
      <LiveResume formData={formData} rid={rid}/>
    </div>
  );
};

export default Form;
