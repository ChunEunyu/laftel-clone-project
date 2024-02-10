import { useEffect, useCallback } from 'react';
import useDailyStore from '../stores/useDailyStore'
import { fetchDailyAnime, fetchAnimeDetail } from '../utils/api';

const DailyAnimeList = () => {

  const { 
    selectedDay, 
    setAnimeData, 
    setCategorizedData,
    setSelectedDayData
  } = useDailyStore();


  const fetchData = useCallback(async () => {
    try {
        // 신작 애니메이션 데이터 가져오기
        const data = await fetchDailyAnime();
        setAnimeData(data);

        // 신작 애니메이션을 요일 별로 분류하기
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

        // 각 요일별로 상세 정보 가져오기
        const detailedData = await Promise.all(
          newData.map(async (dayData) => {
              return Promise.all(dayData.map(async (anime) => {
                  try {
                      const detailData = await fetchAnimeDetail(anime.id);
                      return detailData;
                  } catch (detailError) {
                      console.error(`Error fetching detail for item ${anime.id}:`, detailError);
                      throw detailError;
                  }
              }));
          })
      );

      setCategorizedData(detailedData);
      setSelectedDayData(detailedData[selectedDay]); 

      console.log('요일 별 분류 데이터:', newData);
      console.log('상세 정보:', detailedData);

    } catch (error) {
        console.error('Error fetching data:', error);
    }
}, [selectedDay, setAnimeData, setCategorizedData, setSelectedDayData]);


  useEffect(() => {
    fetchData(); 
  }, [fetchData]);
  };

export default DailyAnimeList;
