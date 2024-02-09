import { useEffect } from 'react';
import { fetchFinder } from '../../../utils/api';
import useFinderStore from '../../../stores/useFinderStore';
import { Row, Col } from 'react-bootstrap';
import AnimeCard from '../../../common/AnimeCard';

const ContentAria = () => {
  const { animeData, setAnimeData } = useFinderStore();

  const getAnimeList = async () => {
    const data = await fetchFinder();
    setAnimeData(data);
  }

  useEffect(() => {
    getAnimeList();
  }, [])

  return (
    <div className='w-full'>
      <span className='text-sm font-semibold mb-3'>총 {animeData.length}개의 작품이 검색되었어요!</span>
      <Row fluid lg={5} md={4} sm={3} xs={3}>
        {animeData.map((anime, index)=>(
          <Col>
            <AnimeCard 
              key={anime.id}
              imgUrl={anime.img}
              title={anime.name}
              all={anime}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default ContentAria;
