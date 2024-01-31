import React, { useEffect } from 'react';
import useDailyStore from '../stores/useDailyStore'
import { fetchDailyAnime } from '../utils/api';

const DailyAnimeList = () => {

  const { animeData, setAnimeData } = useDailyStore();

  // 요일 별 신작 애니메이션 데이터 불러오기 
  const getDailyAnimeList = async () => {
    const data = await fetchDailyAnime();
    setAnimeData(data);
  }
  
  // 데이터를 요일 별로 분류하기
  const categorizeAnimeByDay = () => {
    const categorizedData = Array.from({ length: 7 }, () => []);
     
    animeData.forEach((anime) => {
        const day = anime.distributed_air_time;
        
        if (day === "월요일") {
            categorizedData[0].push(anime)
        } else if (day === "화요일") {
            categorizedData[1].push(anime)
        } else if (day === "수요일") {
            categorizedData[2].push(anime)
        } else if (day === "목요일") {
            categorizedData[3].push(anime)
        } else if (day === "금요일") {
            categorizedData[4].push(anime)
        } else if (day === "토요일") {
            categorizedData[5].push(anime)
        } else if (day === "일요일") {
            categorizedData[6].push(anime)
        } 

    })

    console.log(categorizedData);
  }

  useEffect(() => {
    getDailyAnimeList();
    categorizeAnimeByDay();
  }, [])

}

export default DailyAnimeList;
