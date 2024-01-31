import React from 'react';

const AnimeCard = ({ imgUrl, title }) => {
  return (
    <div className='truncate p-2 cursor-pointer auto-rows-min gap-1 2xl:h-52 xl:h-48 lg:h-44 md:h-40 sm:h-36'>
        <img
          className='object-cover rounded-sm w-full h-4/5'
          src={imgUrl}
          alt='img'
        />
        <div className='h-2/5 text-sm max-md:text-xs whitespace-normal'>
          {title}
        </div>
    </div>
  );
}


export default AnimeCard;
