import React from 'react';
import FooterSns from './FooterSns';
import { Logo } from '../Svgs/Logo/Logo';
import FooterInfo from './FooterInfo';
import FooterMoreBizInfo from './FooterMoreBizInfo';

const Footer = () => {
  return (
    <div className='max-lg:h-100 pl-12 pr-12 pt-4 bg-footer-background-color text-white' >
      <div className='max-lg:flex-col flex place-content-between' >
        <div className='max-lg:flex-col flex gap-5'>
          <div className='max-lg:flex-col flex items-center'>
            <Logo width='92' height='44'/>  
          </div>
          <FooterInfo />
          <br />
        </div>
        <FooterSns />
      </div>
      <br />
      <div>
        <FooterMoreBizInfo />
      </div>
    </div>
  );
}

export default Footer;
