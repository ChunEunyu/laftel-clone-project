import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import '../JoinForm/JoinForm.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import useAuthStore from '../../../../stores/useAuthStore';

const schema = z.object({
  email: z
    .string()
    .email({ message: '올바른 이메일 주소를 입력해주세요.'}),
  password: z
    .string()
    .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.'})
    .max(15, { message: '비밀번호는 최대 15자 입니다.'}),
});

const Login = () => {
  const { setUserData } = useAuthStore();
  const navigate = useNavigate();
  const { 
    register, 
    handleSubmit, 
    setError,
    formState: {errors, isSubmitting},
  } = useForm({
    defaultValues: {
      email: 'test@email.com'
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await loginUser(email, password);
      throw new Error();
    } catch (error) {
      console.log(error);
      setError("root", {
        message: "아이디 또는 비밀번호가 일치하지 않습니다."
      });
      
    }
  };

  const handleAuthSuccess = (user) => {
    setUserData(user);
    navigate('/');
  };

  async function loginUser(email, password) {
    try {
      const auth = getAuth();
      const user = await signInWithEmailAndPassword(auth, email, password);
      handleAuthSuccess(user);
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='text-sm text-[#fff] font-semibold'>
        이메일로 로그인
      </div>
      <br />
      <div className='h-24'>
        <label className='font-medium text-sm'>
          이메일
        </label>
        <input 
          {...register("email")} 
          type='text' 
          placeholder='이메일을 입력해주세요'
          className='input-box'
        />
        {errors.email && (
          <p className='font-medium text-xs'>
            {errors.email.message}
          </p>
        )}
      </div>
      <div className='h-24'>
        <label className='font-medium text-sm'>
          비밀번호
        </label>
        <input 
          {...register("password")} 
          type='password' 
          placeholder='비밀번호를 입력해주세요' 
          className='input-box'
        />
        {errors.password && (
          <p className='font-medium text-xs'>
            {errors.password.message}
          </p>
        )}
      </div>
      <button className='submit-button' disabled={isSubmitting} type='submit'>
        {isSubmitting ? '로그인...' : '로그인'}
      </button>
      {errors.root && (
        <p className='font-medium text-xs'>
          {errors.root.message}
        </p>
      )}
    </form>
  );
}

export default Login;
