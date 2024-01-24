import React from 'react';
import './JoinForm.css'
import { Button } from 'react-bootstrap';

const JoinForm = () => {
  return (
    <div className='joinForm-box'>
      <div className='font-semibold'>이메일로 시작</div><br />
      <div>
        <span className='text-sm'>이메일</span>
      </div><br />
      <Button
        className='w-full h-10'
        variant='secondary'
      >
        <span className='font-semibold'>다음</span>
      </Button>
    </div>
  );
}

export default JoinForm;
