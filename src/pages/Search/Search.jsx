import React, { useEffect, useState} from 'react';
import Header from '../../components/Header/PageHeader/Header';
import { useSearchParams } from 'react-router-dom';
import { fetchSearch } from '../../utils/api';
import useFinderStore from '../../stores/useFinderStore';
import { Row, Col } from 'react-bootstrap';
import AnimeCard from '../../common/AnimeCard';
import Loading from '../../components/Loading/Loading'

const Search = () => {
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useSearchParams();
  const { animeData, setAnimeData } = useFinderStore();

  const getSearchAnimeList = async () => {
    const searchQuery = query.get('q');
    const data = await fetchSearch(searchQuery);
    setLoading(false);
    setAnimeData(data);
  }

  useEffect(() => {
    getSearchAnimeList();
  }, [query])

  if (!loading) {
    <Loading></Loading>
  }
  

  return (
    <div>
        <Header />
        <div className='pt-24 px-5'>
            <h2 className='font-bold text-[#7b7b7b]'>검색 결과</h2>
            <p>총 {animeData.length}개의 작품이 검색되었어요!</p>
            <Row fluid lg={6} md={4} sm={3} xs={3}>
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
    </div>
  );
}

export default Search;
