import React, { useEffect } from 'react';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from '../../../../constraints/responsive';

import useRecommendStore from '../../../../stores/useRecommendStore';
import { fetchRecommendAnime } from '../../../../utils/api';

import AnimeCard from '../../../../common/AnimeCard';


const RecommendAnimeSlider = () => {

  const { animeData, setAnimeData } = useRecommendStore();

  const postAnimeList = async () => {
    const data = await fetchRecommendAnime(10);
    setAnimeData(data);
  }

  useEffect(() => {
    postAnimeList();
  }, [])

  return (
    <div className='w-full'>
        {animeData.map((animeCategory) => (
          <div key={animeCategory.id}>
            <span className='lg:text-2xl max-lg:text-lg font-semibold'>
              {animeCategory.name}
            </span>
            <br />  
            <Carousel 
              className='relative z-0'
              swipeable={true}
              draggable={false}
              responsive={responsive}
              ssr={true}
              infinite={true}   
              arrows={true}
            >
              {animeCategory.item_list.map((animeItem) => (
                <AnimeCard
                  key={animeItem.id}
                  imgUrl={animeItem.images[1]?.img_url ?? animeItem.images[0]?.img_url}
                  title={animeItem.name}
                  all={animeItem}
                />
            ))}
            </Carousel>
          </div>
        ))}
    </div>
  );
}

export default RecommendAnimeSlider;
