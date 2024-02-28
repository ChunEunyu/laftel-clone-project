import { useEffect, useCallback, useState } from 'react';
import useDailyStore from '../stores/useDailyStore'
import { fetchDailyAnime, fetchAnimeDetail } from '../utils/api';
import Loading from '../components/Loading/Loading';

const DailyAnimeList = () => {
  const [loading, setLoading] = useState(true);
  // const [cachedDetailData, setCachedDetailData] = useState({});

  const { 
    selectedDay, 
    animeData,
    setAnimeData, 
    categorizedData,
    selectedDayData,
    setCategorizedData,
    setSelectedDayData
  } = useDailyStore();
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDailyAnime();
        setAnimeData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (animeData.length > 0) {
      const newData = Array.from({ length: 7 }, () => []);
      animeData.forEach((anime) => {
        const day = anime.animation_info.distributed_air_time;
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
    }
  }, [animeData, selectedDay, setCategorizedData, setSelectedDayData]);

  // 로딩 중일 때 표시할 내용
  if (loading) {
    return <Loading />;
  }
};

export default DailyAnimeList;
