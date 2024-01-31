import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HomeSlider from './components/HomeBanner/HomeSlider';
import RecommendAnimeSlider from './components/AnimeSlider/RecommendAnimeSlider';
import './Home.style.css'
import DailyAnimeSlider from './components/AnimeSlider/DailyAnimeSlider';

const Home = () => {

  return (
    <>
      <div>
        <Header/>
        <HomeSlider/>
        <div className='home-layout'>
          <DailyAnimeSlider />
          <RecommendAnimeSlider />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
