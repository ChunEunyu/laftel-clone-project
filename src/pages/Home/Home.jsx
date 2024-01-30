import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HomeSlider from './components/HomeBanner/HomeSlider';
import AnimeSlider from './components/AnimeSlider/AnimeSlider';
import './Home.style.css'

const Home = () => {

  return (
    <>
      <div>
        <Header/>
        <HomeSlider className='z-10' />
        <div className='home-layout'>
          <AnimeSlider />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
