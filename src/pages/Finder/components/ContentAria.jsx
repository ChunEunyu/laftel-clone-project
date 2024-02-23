import { useEffect, useState } from 'react';
import { fetchFinder } from '../../../utils/api';
import useFinderStore from '../../../stores/useFinderStore';
import { Row, Col } from 'react-bootstrap';
import AnimeCard from '../../../common/AnimeCard';

const ContentAria = () => {
  const { animeData, setAnimeData, checkedItem } = useFinderStore();
  
  // 필터링된 작품 목록을 저장합니다.
  const [filteredAnimeData, setFilteredAnimeData] = useState([]);
  
  // 애니메이션 전체 목록을 받아옵니다.
  const getAnimeList = async () => {
    const data = await fetchFinder();
    setAnimeData(data);
  };
  
  // 선택된 태그와 일치하는 작품만 필터링합니다.
  const filterAnimeData = () => {
    
  };

  useEffect(() => {
    getAnimeList();
  }, []);

  useEffect(() => {
    filterAnimeData();
  }, [checkedItem]);

  return (
    <div className='w-full'>
      <span className='text-sm font-semibold mb-3'>
        총 {animeData.length}개의 작품이 검색되었어요!
      </span>
      <Row fluid lg={5} md={4} sm={3} xs={3}>
        {animeData.map((anime)=>(
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
