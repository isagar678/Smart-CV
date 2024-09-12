import React, { useState } from 'react'
import './Form.css'
import Review from '../components/Review';


const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    skills: '',
    certificates: '',
    workHistory: '',
    education: '',
    contactNo: '',
    email: '',
    address: '',
    projects: '',
    knownLanguages: '',
    professionalSummary: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
    // You can add your form submission logic here
  };

  return (
    <div className="form-div container"   >
    <form id="formid"  onSubmit={handleSubmit}>
      <div>
        <label>Name: *</label>
        <input required type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div className='skills'>
        <label>Skills:</label>
        <input type="text" name="skills" value={formData.skills} onChange={handleChange} />
      </div>
      <div className='certificates'>
        <label>Certificates:</label>
        <input type="text" name="certificates" value={formData.certificates} onChange={handleChange} />
      </div>
      <div>
        <label className='work history'>Work History:</label>
        <textarea name="workHistory" value={formData.workHistory} onChange={handleChange}></textarea>
      </div>
      <div className='education'>
        <label>Education:</label>
        <textarea name="education" value={formData.education} onChange={handleChange}></textarea>
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
        <label>Projects:</label>
        <textarea name="projects" value={formData.projects} onChange={handleChange}></textarea>
      </div>
      <div>
        <label>Known Languages:
        <input type="text" name="knownLanguages" value={formData.knownLanguages} onChange={handleChange} /></label>
      </div>
      <div>
        <label>Professional Summary:
        <textarea name="professionalSummary" value={formData.professionalSummary} onChange={handleChange}></textarea></label>
      </div>
      <button type="submit">Submit</button>
    </form>
    <Review className="reviewer"/>
    </div>
  );
}

export default Form
