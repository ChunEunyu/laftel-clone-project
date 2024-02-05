import { useEffect } from 'react';
import Header from '../../components/Header/PageHeader/Header';
import useRecommendStore from '../../stores/useRecommendStore';
import { fetchThemes } from '../../utils/api';

const Themes = () => {
  
  
  return (
    <div>
      <Header />
      <div className='pt-20 pl-4 pr-4'>
        <h2 className='font-bold'>테마추천</h2>
      </div>
    </div>
  );
}

export default Themes;
