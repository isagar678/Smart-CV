import React from 'react'
import './temp2.css'
const Template2 = () => {
  return (
    <div>
      <div className="resumes container mt-5 resume-container">
      <div className="row">
        <div className="col-md-4 text-left p-4 left-column">
          <h1 className="resume-name" contentEditable>NICOLE VALDEZ</h1>
          <p className="resume-contact" contentEditable><i className="bi bi-envelope-fill"></i> example@example.com</p>
          <p className="resume-contact" contentEditable><i className="bi bi-telephone-fill"></i> (555) 555-5555</p>
          <p className="resume-contact" contentEditable><i className="bi bi-geo-alt-fill"></i> Charlottesville, VA 22901</p>
          
          <h3 className="section-title mt-4" contentEditable>EDUCATION</h3>
          <p className="resume-education" contentEditable>
            University of Virginia<br />
            Charlottesville, VA<br />
            Master of Science: Drama
          </p>
          <p className="resume-education" contentEditable>
            University of Virginia<br />
            Charlottesville, VA<br />
            Bachelor of Arts: Drama
          </p>

          <h3 className="section-title mt-4" contentEditable>CERTIFICATIONS</h3>
          <p className="resume-certification" contentEditable>
            Unstaged: An organic approach to the art and craft of acting:<br />
            Virginia Repertory Theatre - 2015
          </p>
        </div>

        <div className="col-md-8 p-4 right-column">
          <h3 className="section-title" contentEditable>PROFESSIONAL SUMMARY</h3>
          <p className="resume-summary" contentEditable>
            Expressive Actor with eight years of intense training, education, and hands-on experience in theater arts, dance, and singing. Motivated and talented worker specializing in both stage and film. Dedicated to best-in-class performances with skills for memorization and collaboration.
          </p>

          <h3 className="section-title" contentEditable>WORK EXPERIENCE</h3>

          <div className="job-section">
            <h5 contentEditable>The Jefferson Theater - Lead Actress</h5>
            <p className="job-date" contentEditable>Charlottesville, VA • 10/2018 - Current</p>
            <ul>
              <li contentEditable>Learn about characters in scripts and relationships to each other to develop role interpretations.</li>
              <li contentEditable>Study and rehearse roles from scripts to interpret, learn, and memorize lines, stunts, and cues.</li>
              <li contentEditable>Act in one to two theater productions, performing alongside various well-known actors and actresses.</li>
            </ul>
          </div>

          <div className="job-section">
            <h5 contentEditable>The Jefferson Theater - Featured Actress</h5>
            <p className="job-date" contentEditable>Charlottesville, VA • 09/2014 - 10/2018</p>
            <ul>
              <li contentEditable>Performed severe and humorous interpretations of emotional actions and situations, using body movements and gestures.</li>
              <li contentEditable>Captured audience by making them laugh, cry, and become excited, shocked, and scared.</li>
              <li contentEditable>Studied scripts to successfully portray over 100 characters in drama and comedies through speech, body language, and movement.</li>
            </ul>
          </div>

          <div className="job-section">
            <h5 contentEditable>University of Virginia - Student Actress</h5>
            <p className="job-date" contentEditable>Charlottesville, VA • 09/2012 - 06/2014</p>
            <ul>
              <li contentEditable>Sang and danced as part of creative ensembles and troupes for dramatic and comedic performances.</li>
              <li contentEditable>Wrote six original or adapted materials for dramas, comedies, puppet shows, narration, and live performances.</li>
              <li contentEditable>Committed to a diligent rehearsal of lines both with partners and groups to optimize deliveries.</li>
            </ul>
          </div>

          <h3 className="section-title" contentEditable>SKILLS</h3>
          <ul className="skills-list">
            <li contentEditable>Exceptional communicator</li>
            <li contentEditable>Can-do attitude</li>
            <li contentEditable>Stunts expert</li>
            <li contentEditable>Production support</li>
            <li contentEditable>Improv</li>
            <li contentEditable>Memorization skills</li>
            <li contentEditable>Height: 5'8"</li>
            <li contentEditable>Performance improvement</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Template2
