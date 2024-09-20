import React, { useState } from 'react';
import './Form.css';
import Review from '../components/Review';

const Form = () => {
  const [formData, setFormData] = useState({
    name: 'Ann Hill',
    skills: ['Selling expertise'],
    certificates: [''],
    workHistory: [''],
    education: 'Associate of Applied Science in Business Management, Ohio Business College',
    contactNo: '00000',
    email: 'youremail@12',
    address: 'Sarkhej,Ahmedabad',
    projects: 'Customer Relationship Management (CRM) system to enhance customer service and track orders effectively.',
    knownLanguages: 'Spanish, English',
    professionalSummary: 'Reliable, top-notch sales associate with outstanding customer service skills.'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle the array changes
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
    <div className="form-div container">
      <form id="formid" onSubmit={handleSubmit}>
        <div>
          <label>Name: *</label>
          <input required type="text" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label>Contact No: *</label>
          <input required type="text" name="contactNo" value={formData.contactNo} onChange={handleChange} />
        </div>
        <div>
          <label>Professional Summary:</label>
          <textarea name="professionalSummary" value={formData.professionalSummary} onChange={handleChange}></textarea>
        </div>
        
        {/* Skills Section */}
        <div className="skills">
          <label>Skills:</label>
          {formData.skills.map((skill, index) => (
            <div key={index}>
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
            <div key={index}>
              <input
                type="text"
                value={certificate}
                onChange={(e) => handleArrayChange(index, 'certificates', e.target.value)}
              />
              <button type="button" className='remove  btn-lg'  onClick={() => removeField('certificates', index)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={() => addField('certificates')}>Add Certificate</button>
        </div>
        
        {/* Work History Section */}
        <div className="work-history">
          <label>Work History:</label>
          {formData.workHistory.map((history, index) => (
            <div key={index}>
              <input type='text'
                value={history}
                onChange={(e) => handleArrayChange(index, 'workHistory', e.target.value)}
              />
              <button type="button" className='remove' onClick={() => removeField('workHistory', index)}>Remove</button>
            </div>
          ))}
          <button type="button" onClick={() => addField('workHistory')}>Add Work History</button>
        </div>

        <div>
          <label>Projects:</label>
          <textarea name="projects" value={formData.projects} onChange={handleChange}></textarea>
        </div>

        <div className="education">
          <label>Education:</label>
          <textarea name="education" value={formData.education} onChange={handleChange}></textarea>
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
          <label>Known Languages:</label>
          <input type="text" name="knownLanguages" value={formData.knownLanguages} onChange={handleChange} />
        </div>

        <button type="submit">Submit</button>
      </form>

      {/* Pass formData to Review component */}
      <Review formData={formData} className="reviewer" />
    </div>
  );
};

export default Form;
