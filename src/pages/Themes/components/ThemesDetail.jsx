import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchThemes } from '../../../utils/api';
import Header from '../../../components/Header/PageHeader/Header'
import AnimeCard from '../../../common/AnimeCard';

const ThemesDetail = () => {
  const { id } = useParams();
  const [themeDetail, setThemeDetail] = useState(null);
  useEffect(() => {
    const fetchDetail = async () => {
      try {
          const data = await fetchThemes();
          const detailedData = data.results.find(item => item.id === parseInt(id));
          setThemeDetail(detailedData);
      } catch (error) {
          console.error('Error fetching theme detail:', error);
      }
    };
    
    fetchDetail();
    console.log(themeDetail)
  }, [setThemeDetail]);

  return (
    <div>
      <Header />
      <div className='pt-20'>
      {themeDetail && (
        <div>
          <h2>{themeDetail.title}</h2>
          <p>{themeDetail.content}</p>
          {themeDetail.theme_item_list.map((anime)=>(
          <AnimeCard 
            imgUrl={anime.item.img_url}
            title={anime.item.name}
            all={anime}
          />
        ))}
        </div>
      )}
        
      </div>
    </div>
  );
}

export default ThemesDetail;
