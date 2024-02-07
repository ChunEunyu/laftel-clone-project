import React from 'react';

const AnimeCard = ({ imgUrl, title }) => {
  return (
    <div className='truncate p-1 py-auto cursor-pointer lg:h-48 md:h-40 sm:h-36 xs:h-32'>
        <img
          className='object-cover rounded-sm w-full h-4/5'
          src={imgUrl}
          alt='img'
        />
        <div 
          className='overflow-hidden overflow-ellipsis text-sm max-md:text-xs whitespace-normal'
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}  
        >
          {title}
        </div>
    </div>
  );
}


export default AnimeCard;
