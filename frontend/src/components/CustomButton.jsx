import React from 'react'
import './button.css'

const CustomButton = ({text,size,handliClick}) => {
    
  return (
    <button onClick={handliClick} className='btn btn-lg'><b style={{color:"white"}}>{text}</b></button>
  )
}

export default CustomButton
