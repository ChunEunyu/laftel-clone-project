import React, { useState } from 'react';
import useDailyStore from '../stores/useDailyStore';

const DayCircleButton = ({ isHomePage }) => {
  const days = ['월', '화', '수', '목', '금', '토', '일'];
  const { selectedDay, setSelectedDay } = useDailyStore();

  const clickButton = (index) => {
    setSelectedDay(index);
  };

  return (
    <div className='space-x-5 mb-2'>
      {days.map((item, index) => (
        <button 
          key={index}
          className={`
            ${selectedDay === index ? 
              'bg-[#816bff] text-white' 
              : 
              'bg-[#d0d0d0] text-white'
            }
            ${isHomePage ? 
              'rounded-full lg:size-16 lg:text-2xl max-lg:size-11 max-lg:text-lg font-semibold' 
              : 
              'rounded-full size-16 text-[22px] font-semibold'}
          `}
          onClick={() => clickButton(index)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default DayCircleButton;
