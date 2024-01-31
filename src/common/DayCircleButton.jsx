import React, { useState } from 'react';

const DayCircleButton = () => {

    const days = ['월', '화', '수', '목', '금', '토', '일'];

    const [selectedDay, setSelectedDay] = useState(null);

    const clickButton = (index) => {
      if (selectedDay === index) {
        // 이미 선택된 날짜를 다시 클릭하면 선택 해제
        setSelectedDay(null);
      } else {
        // 다른 날짜를 클릭하면 해당 날짜를 선택하고 나머지는 선택 해제
        setSelectedDay(index);
      }
    };

  return (
    <div className='space-x-5 mb-2'>
      {days.map((item, index) => (
        <button 
          key={index}
          className={`rounded-full lg:size-16 lg:text-2xl max-lg:size-11 max-lg:text-lg font-semibold
          ${selectedDay === index ? 'bg-[#816bff] text-white' : 'bg-[#d0d0d0] text-white'}`}
          onClick={() => clickButton(index)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default DayCircleButton;
