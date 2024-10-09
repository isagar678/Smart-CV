import React from 'react'
// import '../css/button.css'

const CustomButton = ({style,text,handleClick}) => {
    
  return (
    <button style={style} onClick={handleClick} className='btn button-class btn-lg'><b style={{color:"white"}}>{text}</b></button>
  )
}

export default CustomButton
