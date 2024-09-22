import React from 'react'
import './button.css'

const CustomButton = ({style,text,handleClick}) => {
    
  return (
    <button style={style} onClick={handleClick} className='btn btn-lg'><b style={{color:"white"}}>{text}</b></button>
  )
}

export default CustomButton
