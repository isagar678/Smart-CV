import React from 'react';
import '../CSS/form.css';
import html2pdf from 'html2pdf.js';
import LiveResume from '../components/LiveResume';
import { useNavigate } from 'react-router-dom';
import { proxy, useSnapshot } from 'valtio';

// Replace this line (incorrect import):
// import formState from '../store';

// With named import:
import { formState,resumeState } from '../store';


const Form = () => {
  const navigate = useNavigate();
  const snap = useSnapshot(formState); // Use the snapshot to track the state
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

  const handlePreview = () => {
    navigate('/preview');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    formState[name] = value; // Directly modify the proxy state
  };

  const handleArrayChange = (index, name, value) => {
    formState[name][index] = value;
  };

  const addField = (name) => {
    formState[name].push(''); // Add empty field to the respective array
  };

  const removeField = (name, index) => {
    formState[name].splice(index, 1); // Remove field by index
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', snap); // Use snapshot to access current state
  };

  return (
    <div className="form-container">
      <div className=" form-section">
        <form  id="formid">
          <div>
            <label>Name: *</label>
            <input
              required
              type="text"
              name="name"
              value={snap.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Contact No: *</label>
            <input
              required
              type="text"
              name="contactNo"
              value={snap.contactNo}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={snap.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>Address:</label>
            <textarea
              name="address"
              value={snap.address}
              onChange={handleChange}
            ></textarea>
          </div>

          <div>
            <label>Professional Summary:</label>
            <textarea
              name="professionalSummary"
              value={snap.professionalSummary}
              onChange={handleChange}
            ></textarea>
          </div>

          {/* Skills Section */}
          <div className="skills">
            <label>Skills:</label>
            {snap.skills.map((skill, index) => (
              <div className="input-container" key={index}>
                <input
                  type="text"
                  value={skill}
                  onChange={(e) => handleArrayChange(index, 'skills', e.target.value)}
                />
                <button
                  type="button"
                  className="remove mx-2"
                  onClick={() => removeField('skills', index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={() => addField('skills')} className="my-2">
              Add Skill
            </button>
          </div>

          {/* Certificates Section */}
          <div className="certificates">
            <label>Certificates:</label>
            {snap.certificates.map((certificate, index) => (
              <div className="input-container" key={index}>
                <input
                  type="text"
                  value={certificate}
                  onChange={(e) => handleArrayChange(index, 'certificates', e.target.value)}
                />
                <button
                  type="button"
                  className="remove mx-2"
                  onClick={() => removeField('certificates', index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={() => addField('certificates')} className="my-2">
              Add Certificate
            </button>
          </div>

          {/* Similar approach for Work History, Projects, and Education */}
          {/* ... */}

          <button onClick={handlePreview} className="my-2">
            Preview
          </button>
        </form>
      </div>
      <div className="resume-section resumes">
        <LiveResume  formData={snap} />
      </div>
    </div>
  );
};

export default Form;
