import React from 'react';
import AnimeCard from '../../../../common/AnimeCard/AnimeCard';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { postApiData } from '../../../../utils/api';

const AnimeSlider = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };


  return (
    <div>
        <h1>genre</h1>
        <Carousel 
            responsive={responsive}
            infinite={true}
        >
        <div><AnimeCard /></div>
        <div><AnimeCard /></div>
        <div><AnimeCard /></div>
        <div><AnimeCard /></div>
    </Carousel>
    </div>
  );
}

export default AnimeSlider;
