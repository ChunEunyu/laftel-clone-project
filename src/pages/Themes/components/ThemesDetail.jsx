import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchThemes } from '../../../utils/api';
import Header from '../../../components/Header/PageHeader/Header';
import ThemesDetailedAnimeCard from './ThemesDetailedAnimeCard';
import Loading from '../../../components/Loading/Loading';

const ThemesDetail = () => {
  const { id } = useParams();
  const [themeDetail, setThemeDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const data = await fetchThemes();
        const detailedData = data.results.find(item => item.id === parseInt(id));
        setThemeDetail(detailedData);
        setLoading(false); // 데이터 로딩 완료 후 loading 상태 변경
      } catch (error) {
        console.error('Error fetching theme detail:', error);
        setLoading(false); // 에러 발생 시에도 loading 상태 변경
      }
    };

    fetchDetail();
  }, [id]);

  // 로딩 중일 때 표시할 내용
  if (loading) {
    return (
      <Loading />
    );
  }

  // 데이터 로딩 완료 후 표시할 내용
  return (
    <div>
      <Header />
      <div className='pt-20 max-sm:pt-16'>
        {themeDetail && (
          <div className='pb-5'>
            <div className='w-full h-[280px] max-sm:h-[330px] bg-[#191B2A] text-[#fff] pt-20 px-5'>
              <h2 className='font-bold'>
                {themeDetail.title}
              </h2>
              <p className=''>
                {themeDetail.content}
              </p>
            </div>
          </div>
        )}
        {themeDetail && themeDetail.theme_item_list.map((anime) => (
          <ThemesDetailedAnimeCard key={anime.item.id} info={anime.item} />
        ))}
      </div>
    </div>
  );
}

export default ThemesDetail;
