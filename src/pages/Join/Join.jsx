import React from 'react';
import './Join.css'
import JoinForm from './components/JoinForm';
import { Logo } from '../../assets/Svgs/Logo/Logo';

const Join = () => {
  return (
    <div className='join-container'>
        <Logo color='#816bff' width='180px' height='45px' />
        <JoinForm />
    </div>
  );
}

export default Join;
