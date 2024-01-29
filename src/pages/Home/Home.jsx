import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HomeSlider from './components/HomeSlider';

const Home = () => {

  return (
    <>
      <div>
        <Header />
        <div className='h-screen'>
          <HomeSlider className='z-10' />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
