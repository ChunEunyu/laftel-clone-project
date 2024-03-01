import { useEffect, useState } from 'react';
import Header from '../../components/Header/PageHeader/Header';
import { fetchThemes } from '../../utils/api';
import useThemesStore from '../../stores/useThemesStore'
import ThemesCard from './components/ThemesCard';
import { Container, Row, Col } from 'react-bootstrap';
import Loading from '../../components/Loading/Loading';

const Themes = () => {
  const [loading, setLoading] = useState(true);
  const { themesData, setThemesData } = useThemesStore();

  const postThemesList = async () => {
    const data = await fetchThemes();
    setThemesData(data.results);
    setLoading(false);
  };

  useEffect(() => {
    postThemesList();
  }, [])

  // 로딩 중일 때 표시할 내용
  if (loading) {
    return <Loading />;
  }
 
  return (
    <div>
      <Header />
      <div className='pt-20 pb-20 lg:size-7/12 mx-auto'>
        <Container fluid >
          <h3 className='font-bold '>테마추천</h3>
          <Row>
            {themesData.map((item, index) => (
              <Col key={index} xs={6} sm={4} md={4} lg={4}>
                <ThemesCard 
                  id={item.id}
                  imgUrl={item.theme_item_list[0].item.img_url} 
                  title={item.title} 
                  desc={item.content} 
                />
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Themes;
