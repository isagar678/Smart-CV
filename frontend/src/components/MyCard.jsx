import React from 'react';
import { useNavigate } from 'react-router-dom';
import CustomButton from './CustomButton'
import './card.css'

const MyCard = ({ title, image,rid , key}) => {
  const navigate=useNavigate();
  const handleClick = () => {
    navigate(`/form/${rid}`);
  };
  return (
    <div className="card custom-card" >
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        
        <CustomButton style={{ position: 'relative', }} handleClick={handleClick} key={key} rid={rid} text="USE"/>
      </div>
    </div>
  );
};

export default MyCard;
