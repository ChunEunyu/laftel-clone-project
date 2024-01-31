import React, { useEffect } from 'react';
import DayCircleButton from '../../../../common/DayCircleButton';
import Carousel from "react-multi-carousel";
import DailyAnimeList from '../../../../common/DailyAnimeList';

const DailyAnimeSlider = () => {

  return (
    <div className='w-full'>
      <div className='lg:text-2xl max-lg:text-lg font-semibold mb-2'>
        요일별 신작
      </div>
      <DayCircleButton />
      <DailyAnimeList />
    </div>
  );
}

export default DailyAnimeSlider;
