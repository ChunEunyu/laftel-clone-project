import { useEffect, useState } from 'react';
import { fetchFinder } from '../../../utils/api';
import useFinderStore from '../../../stores/useFinderStore';
import { Row, Col } from 'react-bootstrap';
import AnimeCard from '../../../common/AnimeCard';
import Loading from '../../../components/Loading/Loading'

const ContentAria = () => {
  const { animeData, setAnimeData, checkedItem } = useFinderStore();
  
  // 필터링된 작품 목록을 저장합니다.
  const [filteredAnimeData, setFilteredAnimeData] = useState(null);
  
  // 애니메이션 전체 목록을 받아옵니다.
  const getAnimeList = async () => {
    const data = await fetchFinder();
    setAnimeData(data);
  };
  
  // 선택된 태그와 일치하는 작품만 필터링합니다.
  const filterAnimeData = () => {
    const filteredData = []; // 필터링된 작품을 저장할 배열

    animeData.forEach((data) => {
      let shouldAdd = true; // 모든 태그를 만족하는지 여부
      
      checkedItem.forEach((tags, index) => {
        if (tags.length !== 0) {
          if (index === 0 || index === 1) { // 0: 장르, 1: 태그
            const anime_tag_name = data.main_tag.map(tag => tag.name);
            if (!tags.some(tag => anime_tag_name.includes(tag))) {
              shouldAdd = false;
              return;
            } 

          } else if (index === 2) { // 2: 년도
            const year = parseInt(data.animation_info.air_year_quarter.slice(0, 4)); // 년도
            const quarter = parseInt(data.animation_info.air_year_quarter.slice(5, 8)); // 분기
            let tagMatched = false; // 태그가 일치하는지 여부를 나타내는 변수

            tags.some((tag) => {
              const tag_year = parseInt(tag.slice(0, 4)); // 년도
              const tag_quarter = parseInt(tag.slice(5, 8)); // 분기

              if (tag_year <= 2021 && tag_year >= 2010) { // 2010년 ~ 2021년
                if (year === tag_year) {
                  tagMatched = true;
                  return true;
                }
              } else if (tag === '2000년대') { // 2000년대
                if (year >= 2000 && year < 2010) {
                  tagMatched = true;
                  return true;
                }
              } else if (tag_year < 2000) {
                if (year < 2000) {
                  tagMatched = true;
                  return true;
                }
              } else { // 2022년 1분기 ~ 2024년 1분기
                if (tag_year === year && tag_quarter === quarter) {
                  tagMatched = true;
                  return true;
                }
              }
            });

            if (!tagMatched) {
              shouldAdd = false;
              return;
            }
            
          } else if (index === 3) { // 3: 방영
            if (((tags.some(tag => tag === '방영중')) && (data.is_ending === true)) || ((tags.some(tag => tag === '완결')) && (data.is_ending === false))) {
              shouldAdd = false;
              return;
            }
            
          } else if (index === 4) { // 4: 출시 타입
            if (tags.some(tag => tag !== data.animation_info.medium)) {
              shouldAdd = false;
              return; 
            }
          }
        }
      });

      // 모든 태그 조건을 만족하는 경우만 배열에 추가
      if (shouldAdd) {
        filteredData.push(data);
      }
    });

    // 필터링된 작품 목록을 저장
    setFilteredAnimeData(filteredData);
  };

  useEffect(() => {
    getAnimeList(); // 페이지가 처음 렌더링될 때 애니메이션 데이터를 가져옵니다.
  }, []);

  useEffect(() => {
    if (animeData) { // animeData가 존재하는 경우에만 필터링 작업을 수행합니다.
      filterAnimeData(); 
    }
  }, [animeData, checkedItem]);

  if (!filteredAnimeData) {
    return <Loading />; // filteredAnimeData가 null인 경우 로딩 상태 표시
  }

  return (
    <div className='w-full'>
      <span className='text-sm font-semibold mb-3'>
        총 {filteredAnimeData.length}개의 작품이 검색되었어요!
      </span>
      <Row fluid lg={5} md={4} sm={3} xs={3}>
        {filteredAnimeData.map((anime)=>(
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
