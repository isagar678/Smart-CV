import React from 'react';
// import '../css/form.css';
import LiveResume from '../components/LiveResume';
import { useNavigate } from 'react-router-dom';
import { proxy, useSnapshot } from 'valtio';
import { formState, resumeState } from '../store';

const Form = () => {
  const navigate = useNavigate();
  const snap = useSnapshot(formState);
  const rid = useSnapshot(resumeState);

  const handlePreview = () => {
    navigate(`/preview/${rid.resumeID}`);
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
    console.log('Form Data Submitted:', snap);
  };

  return (
    <div className="form-container">
      <div className="form-section">
        <form id="formid">
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

          {/* Work History Section */}
          <div className="work-history">
            <label>Work History:</label>
            {snap.workHistory.map((history, index) => (
              <div key={index}>
                <label>Position:</label>
                <input
                  type="text"
                  value={history.position || ""}
                  onChange={(e) =>
                    handleArrayChange(index, 'workHistory', { ...history, position: e.target.value })
                  }
                />

                <label>Company Name:</label>
                <input
                  type="text"
                  value={history.company || ""}
                  onChange={(e) =>
                    handleArrayChange(index, 'workHistory', { ...history, company: e.target.value })
                  }
                />

                <label>Location:</label>
                <input
                  type="text"
                  value={history.location || ""}
                  onChange={(e) =>
                    handleArrayChange(index, 'workHistory', { ...history, location: e.target.value })
                  }
                />

                <label>Start Date:</label>
                <input
                  type="text"
                  value={history.startDate || ""}
                  onChange={(e) =>
                    handleArrayChange(index, 'workHistory', { ...history, startDate: e.target.value })
                  }
                />

                <label>End Date:</label>
                <input
                  type="text"
                  value={history.endDate || ""}
                  onChange={(e) =>
                    handleArrayChange(index, 'workHistory', { ...history, endDate: e.target.value })
                  }
                />

                <label>Key Responsibility:</label>
                <textarea
                  value={history.responsibilities || ""}
                  onChange={(e) =>
                    handleArrayChange(index, 'workHistory', { ...history, responsibilities: e.target.value })
                  }
                />

                <button
                  type="button"
                  className="remove"
                  onClick={() => removeField('workHistory', index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={() => addField('workHistory')} className="my-2">
              Add Work History
            </button>
          </div>

          {/* Projects Section */}
          <div className="projects">
            <label>Projects:</label>
            {snap.projects.map((project, index) => (
              <div className="input-container" key={index}>
                <input
                  type="text"
                  value={project}
                  onChange={(e) => handleArrayChange(index, 'projects', e.target.value)}
                />
                <button
                  type="button"
                  className="remove mx-2"
                  onClick={() => removeField('projects', index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={() => addField('projects')} className="my-2">
              Add Project
            </button>
          </div>

          {/* Education Section */}
          <div className="education">
            <label>Education:</label>
            {snap.education.map((education, index) => (
              <div className="input-container" key={index}>
                <input
                  type="text"
                  value={education}
                  onChange={(e) => handleArrayChange(index, 'education', e.target.value)}
                />
                <button
                  type="button"
                  className="remove mx-2"
                  onClick={() => removeField('education', index)}
                >
                  Remove
                </button>
              </div>
            ))}
            <button type="button" onClick={() => addField('education')} className="my-2">
              Add Education
            </button>
          </div>

          <button onClick={handlePreview} className="my-2">
            Preview
          </button>
        </form>
      </div>
      <div className="resume-section resumes">
        <LiveResume formData={snap} />
      </div>
    </div>
  );
};

export default Form;
