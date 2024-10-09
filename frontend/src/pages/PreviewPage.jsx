import React from 'react'
import LiveResume from '../components/LiveResume'
import '../css/preview.css'
import { download } from '../images'
import html2pdf from 'html2pdf.js';
import { useNavigate } from 'react-router-dom';
import CustomButton from '../components/CustomButton';
const handleDownload = () => {
  const element = document.querySelector('.resume-wrappers'); // Selects the element with 'resume-wrapper' class

  if (element) {
    html2pdf()
      .from(element)
      .set({
        filename: 'resume.pdf',  // File name for the downloaded PDF
        margin: 0.5,  // Set margin for the PDF (in inches)
        jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },  // PDF format options
        html2canvas: { scale: 2 },  // Higher scale for better quality
        pagebreak: { mode: ['css', 'avoid-all', 'legacy'] }  // Ensures CSS and element-based breaks are respected
      })
      .save();
  }
};




const PreviewPage = () => {
  const navigate=useNavigate();
  return (
    <>
    <div contentEditable className="bounce-in-right  resume-wrapper">
      <LiveResume />
    </div>
    <CustomButton style={{
      position: 'fixed',
      bottom: '25px',
      left: '10px',     
    animation: 'shake-bottom 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both',
    WebkitAnimation: 'shake-bottom 0.8s cubic-bezier(0.455, 0.03, 0.515, 0.955) both',
  }} handleClick={()=>{navigate(-1)}} text="Go Back"/>
    <div>
      <button className="download-btn vibrate-1" onClick={handleDownload}>
        <img src={download} alt="Download" className="download-icon" />
      </button>
    </div>
  </>
  
  
  )
}

export default PreviewPage
