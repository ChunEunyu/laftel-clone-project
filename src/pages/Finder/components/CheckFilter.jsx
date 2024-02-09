import { useState } from 'react';
import { FaArrowRotateRight } from "react-icons/fa6";
import CheckBox from './CheckBox';

const CheckFilter = () => {
  const filterType= {
    "": ['감상 가능한 작품만 보기', '멤버십으로 감상 가능한 작품만 보기'],
    "장르": ['BL','GL 백합','SF','개그','공포','드라마','로맨스','모험','무협',
      '미스터리','범죄','성인','스릴러','스포츠','시대물','아동','아이돌','악역영애',
      '액션','음식','음악','이세계','일상','재난','추리','치유','특촬','판타지','하렘'],
    "태그": ['가족','감동','게임','동물','동양풍','두뇌싸움','로봇','루프물','마법소녀',
      '먼치킨','무거움','배틀','뱀파이어','복수','삼각관계','서양풍','선생님','성별전환','성장',
      '슬픔','시간여행','역하렘','연예인','열혈','오타쿠','요괴 및 괴물','육아','정치','좀비',
      '주체적 여성','짝사랑','철학','퇴마','학교'],
    "년도": ['2024년 1분기','2023년 4분기','2023년 3분기','2023년 2분기','2023년 1분기',
      '2022년 4분기','2022년 3분기','2022년 2분기','2022년 1분기','2021년','2020년','2019년',
      '2018년','2017년','2016년','2015년','2014년','2013년','2012년','2011년','2010년','2000년대',
      '2000년대 이전'],
    "방영": ['방영중','완결'],
    "출시타입": ['TVA','극장판','OVA'],
    "브랜드": ['애니맥스 플러스','애니플러스','kt alpha','대원','기타']
  };

  return (
    <div className='overflow-y-scroll flex flex-col h-[82vh] w-[350px] bg-[#fff] pr-3 pb-20'>
      <div className='flex flex-row justify-between  py-3'>
        <div className='font-semibold text-lg'>필터</div>
        <div className='flex flex-row'>
          <FaArrowRotateRight className='mt-1 mr-1' />
          <span className='font-semibold text-md mb-2'>전체 초기화</span>
        </div>
      </div>
      {Object.entries(filterType).map(([type, items]) => (
        <div key={type}>
          <div className='font-semibold text-lg mb-2'>{type === 'filter' ? '필터' : type}</div>
          {items.map((item) => (
            <>
              <CheckBox key={item}>{item}</CheckBox>
              <br />
            </>
          ))}
          <br />
        </div>
      ))}
    </div>
  );
}

export default CheckFilter;
