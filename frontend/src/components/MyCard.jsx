import React from 'react';
import ssImage from './ss.png';
import { useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton'
import './card.css'

const MyCard = ({ title, text, image }) => {
  const navigate=useNavigate();
  const handleClick = () => {
    navigate('/form');
  };
  return (
    <div className="card custom-card" >
      <img src={ssImage} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <CustomButton handleClick={handleClick} text="USE"/>
      </div>
    </div>
  );
};

export default MyCard;
