import React from 'react';
import DailyAnimeList from '../../common/DailyAnimeList';
import useDailyStore from '../../stores/useDailyStore';
import AnimeCard from '../../common/AnimeCard';
import { Row, Col } from 'react-bootstrap';
import { getCurrentDayOfWeek } from '../../utils/getCurrentDayOfWeek';

const DailyListCard = () => {
  const { categorizedData } = useDailyStore();
  const today = getCurrentDayOfWeek();
  const day = ["월요일","화요일","수요일","목요일","금요일","토요일","일요일"];

  console.log(categorizedData);
  console.log(today);
  return (
    <div className=''>
      <DailyAnimeList />
      <Row>
        {day.map((item, index) => (
          <Col key={index}>
            <Row className={
              index === today ? 'bg-[#F0EDFF] rounded-xl h-full d-flex flex-column' : ''}
            >
              <div className={`
                ${index === today ? 'text-[#816BFF]' : ''}
                pt-3 pb-3 text-center text-lg font-semibold`}
              >
                {item}
              </div>
              {categorizedData[index].map((anime)=>(
                <AnimeCard
                  key={anime.id}
                  imgUrl={anime.images[1]?.img_url ?? anime.images[0]?.img_url}
                  title={anime.name}
                  all={anime}
                />
              ))}
            </Row>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default DailyListCard;
