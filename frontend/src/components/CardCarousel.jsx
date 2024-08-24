import React from 'react';

import MyCard from './MyCard';

const chunkArray = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

export const CardCarousel = () => {
    const cards = [
        { title: 'Card 1', text: 'This is card 1', image: 'https://images.unsplash.com/photo-1724086575243-6796fc662673?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8' },
        { title: 'Card 2', text: 'This is card 2', image: 'https://images.unsplash.com/photo-1724086575243-6796fc662673?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8' },
        { title: 'Card 3', text: 'This is card 3', image: 'https://images.unsplash.com/photo-1724086575243-6796fc662673?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8' },
        { title: 'Card 4', text: 'This is card 4', image: 'https://images.unsplash.com/photo-1724086575243-6796fc662673?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8' },
        { title: 'Card 5', text: 'This is card 5', image: 'https://images.unsplash.com/photo-1724086575243-6796fc662673?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8' },
        { title: 'Card 6', text: 'This is card 6', image: 'https://images.unsplash.com/photo-1724086575243-6796fc662673?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8' },
        { title: 'Card 7', text: 'This is card 6', image: 'https://images.unsplash.com/photo-1724086575243-6796fc662673?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8' },
        { title: 'Card 8', text: 'This is card 6', image: 'https://images.unsplash.com/photo-1724086575243-6796fc662673?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8' }
      ];

    const cardChunks = chunkArray(cards, 4); // Create chunks of 4 cards

    return (
      <div id="cardCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {cardChunks.map((chunk, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="d-flex justify-content-around">
                {chunk.map((card, idx) => (
                  <MyCard 
                    key={idx}
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
