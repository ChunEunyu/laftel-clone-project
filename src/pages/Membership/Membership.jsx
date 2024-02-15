import React from 'react';
import Header from '../../components/Header/PageHeader/Header'
import PremiumContentBox from './components/PremiumContentBox';
import BasicContentBox from './components/BasicContentBox';

const Membership = () => {
  return (
    <div>
      <Header />
      <div className='pt-18'>
        <div className='relative flex justify-center items-center'>
          <img 
            className='w-full h-[400px] object-cover'
            src='https://laftel.net/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fimg-landing-background.7f7785ee.webp&w=3840&q=75' 
            alt='img' 
          />
          <div className='absolute top-40 left-0 w-full text-[#fff] text-center'>
            <h1 className='text-2xl font-bold'>
              라프텔 멤버십으로 스마트한 덕질!
            </h1>
            <p className='text-md'>
              동시방영 신작부터 역대 인기 애니까지<br />
              멤버십으로 최애애니 광고없이 편안하게 즐기세요
            </p>
          </div>
          <div className='absolute top-96'>
            <PremiumContentBox />
          </div>
          <div className='absolute top-[820px] pb-5'>
            <p className='font-extrabold text-[#616161]'>
              다른 멤버쉽
            </p>
            <BasicContentBox />
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Membership;
