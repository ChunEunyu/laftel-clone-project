import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
      <div>
        <Header />
        <div className='h-screen' style={{backgroundColor:'pink'}}><h1>Home</h1></div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
