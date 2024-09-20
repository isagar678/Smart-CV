import React from 'react'
import { useParams } from 'react-router-dom';
import CustomButton from './CustomButton';
import html2pdf from 'html2pdf.js';

import Temp1 from '../ResumeTemplates/template1/Temp1'
import Temp2 from '../ResumeTemplates/template2/Temp2'
import Temp3 from '../ResumeTemplates/template3/Temp3'
import Temp4 from '../ResumeTemplates/template4/Temp4'
import Temp5 from '../ResumeTemplates/template5/Temp5'
import Temp6 from '../ResumeTemplates/template6/Temp6'

const LiveResume = () => {
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
    const { rid } = useParams();
  const components = {
    1: Temp1,
    2: Temp2,
    3: Temp3,
    4: Temp4,
    5: Temp5,
    6: Temp6,
  };

  const Component = components[Number(rid)];
  
  return (
    <div>
      {Component && <Component />}
      <CustomButton handleClick={handleDownload} text="download"/>    
    </div>
  );
};

export default LiveResume;