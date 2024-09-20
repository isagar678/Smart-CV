import React from 'react'
import './temp1.css'
const Temp1 = () => {
  return (
    
    <div className="resumes resume-container mt-5 p-4">
    <div className="row text-center">
      <div className="col-12">
        <h1 className="resume-name" contentEditable>Jeff Armstrong</h1>
        <p className="resume-contact"  >
          example@example.com | (555) 555-5555 | Eastpointe, MI 48021
        </p>
      </div>
    </div>

    <div className="row mt-4">
      <div className="col-12">
        <h3 className="section-title" contentEditable>PROFESSIONAL SUMMARY</h3>
        <p className="resume-summary" contentEditable>
          Talented prep cook with 11 years of experience in high-stressed environments. Clear communicator with team-oriented focus and advanced skills to effectively work with cashiers and kitchen staff to review and prepare orders. Dedicated team player with punctual nature and open communication style dedicated to meeting every preparation and service need. Qualified and hardworking with up-to-date food handling permit.
        </p>
      </div>
    </div>

    <div className="row mt-4">
      <div className="col-12">
        <h3 className="section-title" contentEditable>WORK HISTORY</h3>

        <div className="job-section">
          <h5 contentEditable>45 East, Eastpointe, MI</h5>
          <p className="job-date" contentEditable>Prep Cook | 06/2017 - Current</p>
          <ul>
            <li contentEditable>Maintain clean, hygienic kitchen workspace by sweeping, mopping, and taking out the trash.</li>
            <li contentEditable>Prepare 10 to 20 items like bacon ahead of time to promote efficiency in dish garnishing.</li>
            <li contentEditable>Collaborate with Head Cooks to collect information about specific customer desires and dietary needs.</li>
          </ul>
        </div>

        <div className="job-section">
          <h5 contentEditable>By Felecia, Eastpointe, MI</h5>
          <p className="job-date" contentEditable>Food Prep Cooking Assistant | 01/2012 - 06/2017</p>
          <ul>
            <li contentEditable>Sanitized kitchen surfaces and equipment by cleaning grills, griddles, ovens, and fryers.</li>
            <li contentEditable>Produced over 50 entrée dishes per day and maintained near-perfect customer satisfaction scores.</li>
            <li contentEditable>Cooperated with preparation of cooking supplies, ingredients and workstations during opening and closing procedures to maximize efficiency.</li>
          </ul>
        </div>

        <div className="job-section">
          <h5 contentEditable>By Felecia, Eastpointe, MI</h5>
          <p className="job-date" contentEditable>Prep Dishwasher | 08/2009 - 01/2012</p>
          <ul>
            <li contentEditable>Completed extra cleaning work on garbage cans, racks, dry storage areas, and other fixtures to keep the kitchen spotless.</li>
            <li contentEditable>Scraped, washed, and efficiently restacked dishware, utensils, and glassware to keep kitchen ready for customer demands.</li>
            <li contentEditable>Loaded more than 100 glasses, silverware, and dishes into dishwasher each shift, running average of five loads per day.</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="row mt-4">
      <div className="col-md-6">
        <h3 className="section-title" contentEditable>SKILLS</h3>
        <ul className="skills-list">
          <li contentEditable>Ingredient preparation</li>
          <li contentEditable>Food inspection</li>
          <li contentEditable>Patience</li>
          <li contentEditable>Menu memorization</li>
          <li contentEditable>Basic cooking techniques</li>
          <li contentEditable>Manual dexterity</li>
          <li contentEditable>Organizational</li>
          <li contentEditable>Attention to detail</li>
        </ul>
      </div>

      <div className="col-md-6">
        <h3 className="section-title" contentEditable>EDUCATION</h3>
        <p contentEditable>
          HFC Michigan Technical Education Center<br />
          Dearborn, MI<br />
          Associate of Arts: Culinary Arts
        </p>
        <h3 className="section-title" contentEditable>CERTIFICATIONS</h3>
        <p contentEditable>Food Handler License - 2015</p>
      </div>
    </div>
  </div>
         
    
  )
}

export default Temp1
