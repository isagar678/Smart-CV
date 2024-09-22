import React from 'react'

import Temp1 from '../ResumeTemplates/template1/Temp1'
import Temp2 from '../ResumeTemplates/template2/Temp2'
import Temp3 from '../ResumeTemplates/template3/Temp3'
import Temp4 from '../ResumeTemplates/template4/Temp4'
import Temp5 from '../ResumeTemplates/template5/Temp5'
import Temp6 from '../ResumeTemplates/template6/Temp6'
import Temp7 from '../ResumeTemplates/template7/Temp7'
import Temp8 from '../ResumeTemplates/template8/Temp8'

const LiveResume = ({rid,formData}) => {

  const components = {
    1: Temp1,
    2: Temp2,
    3: Temp3,
    4: Temp4,
    5: Temp5,
    6: Temp6,
    7: Temp7,
    8: Temp8,
  };

  const Component = components[Number(rid)];
  
  return (
    <div>
      {Component && <Component formData={formData}/>}
    </div>
  );
};

export default LiveResume;