
import Header from '../../components/Header/Header';
import DailyAnimeSlider from '../Home/components/AnimeSlider/DailyAnimeSlider';


const Daily = () => {
  return (
    <div>
      <Header />
      <div className='bg-black h-screen'>
        <DailyAnimeSlider />
      </div>
    </div>
  );
}

export default Daily;
