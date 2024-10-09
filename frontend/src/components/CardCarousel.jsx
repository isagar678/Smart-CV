import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import MyCard from './MyCard';
import { Pagination } from 'swiper/modules'; // Only import Pagination module

import temp1Image from '../ResumeTemplates/templateImages/temp1.png';
import temp2Image from '../ResumeTemplates/templateImages/temp2.png';
import temp3Image from '../ResumeTemplates/templateImages/temp3.png';
import temp4Image from '../ResumeTemplates/templateImages/temp4.png';
import temp5Image from '../ResumeTemplates/templateImages/temp5.png';
import temp6Image from '../ResumeTemplates/templateImages/temp6.png';
import temp7Image from '../ResumeTemplates/templateImages/temp7.png';
import temp8Image from '../ResumeTemplates/templateImages/temp8.png';

const cards = [
  { image: temp1Image },
  { image: temp2Image },
  { image: temp3Image },
  { image: temp4Image },
  { image: temp5Image },
  { image: temp6Image },
  { image: temp7Image },
  { image: temp8Image },
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
  let rid = 1;

  return (
    <div id='cardCarousel'>
    <Swiper
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }} // Only pagination, no navigation
      loop={true}
      modules={[Pagination]} // Use only Pagination module
    >
      {cardChunks.map((chunk, index) => (
        <SwiperSlide key={index}>
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
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};
