import { useEffect, useState } from 'react';
import './JoinForm.css';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import useAuthStore from '../../../../stores/useAuthStore';

const JoinForm = () => {
  const { userData, setUserData } = useAuthStore();
  const [isLoginMode, setIsLoginMode] = useState(true); // Initially login mode
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  useEffect(() => {
    if (userData !== null) {
      navigate('/');
    }
  }, [userData, navigate]);

  const onSubmit = async (data) => {
    const { email, password } = data;
    if (isLoginMode) {
      await loginUser(email, password);
    } else {
      await registerUser(email, password);
    }
  };

  async function registerUser(email, password) {
    try {
      const auth = getAuth();
      const user = await createUserWithEmailAndPassword(auth, email, password);
      console.log(user);
      handleAuthSuccess(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  async function loginUser(email, password) {
    try {
      const auth = getAuth();
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      handleAuthSuccess(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  const handleAuthSuccess = (user) => {
    setUserData(user);
    navigate('/');
  };

  return (
    <div className='joinForm-box'>
      <div className='text-xl text-center font-semibold'>
        {isLoginMode ? '로그인' : '가입'}
      </div><br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className='font-semibold text-sm'> 이메일 </label>
        <input
          className='input-box'
          id='email'
          type='text'
          placeholder='이메일을 입력하세요'
          {...register('email', {
            pattern: {
              value: /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: '이메일 형식에 맞지 않습니다.',
            },
          })}
        />
        <label className='font-semibold text-sm'>비밀번호</label>
        <input
          className='input-box'
          id='password'
          type='password'
          placeholder='비밀번호를 입력하세요'
          {...register('password', {
            minLength: {
              value: 7,
              message: '7자리 이상 비밀번호를 입력하세요.',
            },
          })}
        />
        {!isLoginMode && (
          <div>
            <label className='font-semibold text-sm'>비밀번호 확인</label>
            <input
              className='input-box'
              name='passwordCheck'
              type='password'
              placeholder='비밀번호를 확인하세요'
              {...register('exampleRequired', {
                required: true,
              })}
            />
          </div>
        )}
        <input
          className='submit-button'
          type='submit'
          value={isLoginMode ? '로그인' : '가입'}
        />
      </form>
      <button  
        onClick={() => setIsLoginMode(!isLoginMode)}
      >
        {isLoginMode ? '가입하기' : '로그인하기'}
      </button>
    </div>
  );
};

export default JoinForm;