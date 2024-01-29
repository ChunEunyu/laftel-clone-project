import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HomeSlider from './components/HomeBanner/HomeSlider';
import AnimeSlider from './components/AnimeSlider/AnimeSlider';

const Home = () => {

  return (
    <>
      <div>
        <Header />
        <div>
          <HomeSlider className='z-10' />
          <AnimeSlider />
        </div>
        
      </div>
      <Footer />
    </>
  );
}

export default Home;
