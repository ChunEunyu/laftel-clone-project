import { useEffect } from 'react';
import Header from '../../components/Header/PageHeader/Header';
import { fetchThemes } from '../../utils/api';
import useThemesStore from '../../stores/useThemesStore'
import ThemesCard from '../../common/ThemesCard';
import { Container, Row, Col } from 'react-bootstrap';

const Themes = () => {
  const { themesData, setThemesData } = useThemesStore();

  const postThemesList = async () => {
    const data = await fetchThemes();
    setThemesData(data.results);
  }

  useEffect(() => {
    postThemesList();
  }, [])
 
  return (
    <div>
      <Header />
      <div className='pt-20 pb-20 lg:size-7/12 mx-auto'>
        <Container fluid >
          <h3 className='font-bold '>테마추천</h3>
          <Row>
            {themesData.map((item, index) => (
              <Col key={index} xs={4} sm={4} md={4} lg={4}>
                <ThemesCard 
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
