import React from 'react'
import './button.css'

const CustomButton = ({text,handleClick}) => {
    
  return (
    <button onClick={handleClick} className='btn btn-lg'><b style={{color:"white"}}>{text}</b></button>
  )
}

export default CustomButton
