import { useState} from 'react';
import './JoinForm.css';
import Login from '../Login/Login';
import Signup from '../Signup/Signup';

const JoinForm = () => {
  const [isLoginMode, setIsLoginMode] = useState(true); // 로그인 혹은 회원가입을 할지
  
  // 하단 버튼을 누르면 가입하기 혹은 로그인으로 이동.
  const changeLogin = () => {
    setIsLoginMode(!isLoginMode);
  };

  return (
    <div className='joinForm-box'>
      { isLoginMode? <Login /> : <Signup /> }
      <button 
        onClick={changeLogin}
        className='font-medium text-sm'
      >
        {isLoginMode ? '가입하기' : '로그인하기'}
      </button>
    </div>
  );
};

export default JoinForm;