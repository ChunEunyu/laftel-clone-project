import { useState } from 'react';
import AnimeDetailModal from './AnimeDetailModal';
import useAnimeCardStore from '../stores/useAnimeCardStore';

const AnimeCard = ({ imgUrl, title, all }) => {
  const { allInfo, setAllInfo} = useAnimeCardStore();
  const [showDetailCard, setShowDetailCard] = useState(false);
  const showDetailModal = () => {
    setShowDetailCard(!showDetailCard);
    setAllInfo(all);
  };

  return (
    <div 
      className='truncate p-1 py-auto cursor-pointer lg:h-48 md:h-40 sm:h-36 xs:h-32 max-sm:h-24'
      onClick={showDetailModal}
    >
        <img
          className='object-cover rounded-sm w-full h-4/5'
          src={imgUrl}
          alt='img'
        />
        <div 
          className='overflow-hidden overflow-ellipsis text-sm max-md:text-xs whitespace-normal'
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}  
        >
          {title}
        </div>
        {showDetailCard && (
          <AnimeDetailModal  />
        )}
    </div>
  );
}


export default AnimeCard;
