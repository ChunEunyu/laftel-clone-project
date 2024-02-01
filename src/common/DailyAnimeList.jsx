import React, { useEffect } from 'react';
import useDailyStore from '../stores/useDailyStore'
import { fetchDailyAnime } from '../utils/api';

const DailyAnimeList = () => {

  const { 
    animeData, 
    categorizedData, 
    selectedDay, 
    selectedDayData,
    setAnimeData, 
    setCategorizedData,
    setSelectedDayData
  } = useDailyStore();

  // 요일 별 신작 애니메이션 데이터 불러오기 
  const getDailyAnimeList = async () => {
    const data = await fetchDailyAnime();
    setAnimeData(data);
  }
  
  // 데이터를 요일 별로 분류하기
  const categorizeAnimeByDay = () => {
    const newData = Array.from({ length: 7 }, () => []);
     
    animeData.forEach((anime) => {
        const day = anime.distributed_air_time;
        
        if (day === "월요일") {
          newData[0].push(anime)

        } else if (day === "화요일") {
          newData[1].push(anime)

        } else if (day === "수요일") {
          newData[2].push(anime)

        } else if (day === "목요일") {
          newData[3].push(anime)

        } else if (day === "금요일") {
          newData[4].push(anime)

        } else if (day === "토요일") {
          newData[5].push(anime)

        } else if (day === "일요일") {
          newData[6].push(anime)

        } 
    });

    setCategorizedData(newData);

  };

  // 누른 요일 버튼에 대한 해당 요일의 애니메이션 리스트 데이터 보내기 
  const sendSelectedDayData = () => {

    if (selectedDay === 0) {
      setSelectedDayData(categorizedData[0]);
      
    } else if (selectedDay === 1) {
      setSelectedDayData(categorizedData[1]);
      
    } else if (selectedDay === 2) {
      setSelectedDayData(categorizedData[2]);
      
    } else if (selectedDay === 3) {
      setSelectedDayData(categorizedData[3]);
      
    } else if (selectedDay === 4) {
      setSelectedDayData(categorizedData[4]);
      
    } else if (selectedDay === 5) {
      setSelectedDayData(categorizedData[5]);
      
    } else if (selectedDay === 6) {
      setSelectedDayData(categorizedData[6]);
      
    } 
  };

  useEffect(() => {
    getDailyAnimeList();
  }, [])

  useEffect(() => {
    categorizeAnimeByDay();
  }, [selectedDay])

  useEffect(() => {
    sendSelectedDayData();
    console.log("selectedDay", selectedDay);
    console.log("selectedDayData", selectedDayData);
  }, [selectedDay, selectedDayData])

}

export default DailyAnimeList;
