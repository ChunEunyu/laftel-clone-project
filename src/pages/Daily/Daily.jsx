import DailyAnimeList from '../../common/DailyAnimeList';
import DayCircleButton from '../../common/DayCircleButton';
import Header from '../../components/Header/PageHeader/Header';
import { Row, Col } from 'react-bootstrap';
import AnimeCard from '../../common/AnimeCard'
import useDailyStore from '../../stores/useDailyStore';
import DailyListCard from './DailyListCard';

const Daily = () => {
  const { selectedDayData } = useDailyStore();

  return (
    <div>
      <Header />
      <div className='pt-24 pb-12 pl-24 pr-24'>
        <h3 className='font-bold pb-4 '>요일별 신작</h3>
        <div className='lg:hidden'>
          <DayCircleButton  />
          <DailyAnimeList />
          <Row className=''>
              {selectedDayData.map((anime, index) => (
                <Col key={index} xs={4} sm={4} md={3}>
                  <AnimeCard
                    key={anime.id}
                    imgUrl={anime.images[1]?.img_url ?? anime.images[0]?.img_url}
                    title={anime.name}
                    all={anime}
                  />
                </Col>
              ))}
            </Row>
        </div>
        <div className='max-lg:hidden'>
          <DailyListCard />
        </div>
      </div>
    </div>
  );
}

export default Daily;
