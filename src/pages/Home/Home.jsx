import React from 'react';
import Footer from '../../components/Footer/Footer';
import HomeSlider from './components/HomeBanner/HomeSlider';
import RecommendAnimeSlider from './components/AnimeSlider/RecommendAnimeSlider';
import './Home.style.css'
import DailyAnimeSlider from './components/AnimeSlider/DailyAnimeSlider';
import Header from '../../components/Header/Header'

const Home = () => {

  return (
    <>
      <div>
        <Header />
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
