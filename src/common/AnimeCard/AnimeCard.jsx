import React from 'react';
import './AnimeCard.style.css'

const AnimeCard = ( title ) => {
  return (
    <div className='anime-card-layout'>
        <div>{title}</div>
    </div>
  );
}


export default AnimeCard;
