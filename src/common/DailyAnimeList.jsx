import { useEffect, useCallback } from 'react';
import useDailyStore from '../stores/useDailyStore'
import { fetchDailyAnime } from '../utils/api';

const DailyAnimeList = () => {

  const { 
    selectedDay, 
    setAnimeData, 
    setCategorizedData,
    setSelectedDayData
  } = useDailyStore();


  const fetchData = useCallback(async () => {
    try {
      const data = await fetchDailyAnime();
      setAnimeData(data);

      const newData = Array.from({ length: 7 }, () => []);
      data.forEach((anime) => {
        const day = anime.distributed_air_time;
        switch (day) {
          case '월요일':
            newData[0].push(anime);
            break;
          case '화요일':
            newData[1].push(anime);
            break;
          case '수요일':
            newData[2].push(anime);
            break;
          case '목요일':
            newData[3].push(anime);
            break;
          case '금요일':
            newData[4].push(anime);
            break;
          case '토요일':
            newData[5].push(anime);
            break;
          case '일요일':
            newData[6].push(anime);
            break;
          default:
            break;
        }
      });

      setCategorizedData(newData);
      setSelectedDayData(newData[selectedDay]);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }, [selectedDay, setAnimeData, setCategorizedData, setSelectedDayData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  };

export default DailyAnimeList;
