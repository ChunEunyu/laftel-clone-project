import React from 'react';
import FooterSns from './FooterSns';
import { Logo } from '../Svgs/Logo/Logo';
import FooterInfo from './FooterInfo';
import FooterMoreBizInfo from './FooterMoreBizInfo';

const Footer = () => {
  return (
    <div className='pl-12 pr-12 bg-footer-background-color text-white' >
      <div className='flex flex-row justify-between' >
        <div className='flex gap-5'>
          <Logo width='92' height='44'/>
          <FooterInfo />
        </div>
        <div className=''><FooterSns /></div>
      </div>
      <div>
        <FooterMoreBizInfo />
      </div>
    </div>
  );
}

export default Footer;
