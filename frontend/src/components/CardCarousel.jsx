import React from 'react';
import './cardCarousel.css'
import MyCard from './MyCard';

import temp1Image from '../ResumeTemplates/templateImages/temp1.png';
import temp2Image from '../ResumeTemplates/templateImages/temp2.png';
import temp3Image from '../ResumeTemplates/templateImages/temp3.png';
import temp4Image from '../ResumeTemplates/templateImages/temp4.png';
import temp5Image from '../ResumeTemplates/templateImages/temp5.png';
import temp6Image from '../ResumeTemplates/templateImages/temp6.png';
import temp7Image from '../ResumeTemplates/templateImages/temp7.png';
import temp8Image from '../ResumeTemplates/templateImages/temp8.png';

const cards = [
  { image: temp1Image},
  { image: temp2Image},
  { image: temp3Image},
  { image: temp4Image},
  { image: temp5Image},
  { image: temp6Image},
  { image: temp7Image},
  { image: temp8Image},
];

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

export const CardCarousel = () => {
  const cardChunks = chunkArray(cards, 4); // Create chunks of 4 cards
  let rid=1;
  return (
    <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        {cardChunks.map((chunk, index) => (
          
          <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
            <div className="d-flex justify-content-around">
              {chunk.map((card, idx) => (
                
                <MyCard 
                  id={idx}
                  rid={rid++}
                  key={card.id}
                  title={card.title} 
                  text={card.text} 
                  image={card.image} 
                />
              ))}
            </div>
          </div>
          
        ))}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#cardCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#cardCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};