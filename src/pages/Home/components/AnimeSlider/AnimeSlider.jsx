import React, { useEffect, useState } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from '../../../../constraints/responsive';
import axios from "axios";
import '../../../../common/AnimeCard/AnimeCard.style.css';


const AnimeSlider = () => {

  const [animeData, setAnimeData] = useState([]);

  const postAnimeList = async () => {
    const resp = await (axios.post('https://laftel.net/api/home/v2/recommend/10/'))
    setAnimeData(resp.data)
    console.log(resp.data);
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
              swipeable={false}
              draggable={false}
              responsive={responsive}
              ssr={true}
              infinite={true}   
            >
              {animeCategory.item_list.map((animeItem) => (
                <>
                  <div 
                    className='truncate m-2 cursor-pointer auto-rows-min gap-1 
                      2xl:h-48 xl:h-44 lg:h-40 md:h-36 sm:h-32'>
                    <img 
                      className='object-cover rounded-sm w-full h-3/4'
                      src={animeItem.images[1]?.img_url ?? animeItem.images[0]?.img_url} 
                      alt='img' 
                    />
                    <div className='text-sm max-md:text-xs whitespace-normal'>
                      {animeItem.name}
                    </div>
                  </div>
                </> 
            ))}
            </Carousel>
          </div>
        ))}
    </div>
  );
}

export default AnimeSlider;
