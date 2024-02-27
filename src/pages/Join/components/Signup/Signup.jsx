import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import '../JoinForm/JoinForm.css';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import useAuthStore from '../../../../stores/useAuthStore';
import './RegisterSuccessModal';
import RegisterSuccessModal from './RegisterSuccessModal';

const schema = z
  .object({
    email: z
      .string()
      .email('올바른 이메일 주소를 입력해주세요.'),
    password: z
      .string()
      .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' })
      .max(15, { message: '비밀번호는 최대 15자 입니다.'}),
    checkPassword: z
      .string()
      .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' })
      .max(15, { message: '비밀번호는 최대 15자 입니다.'}),
  })
  .superRefine(({ checkPassword, password }, ctx)=> {
    if (checkPassword !== password) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '비밀번호가 일치하지 않습니다.',
        path: ['checkPassword'],
      });
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: '비밀번호가 일치하지 않습니다.',
        path: ['password'],
      });
    }
  }
);

const Signup = () => {
  const { userData, setUserData } = useAuthStore();
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 상태

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
      registerUser(email, password);
      setIsModalOpen(true);
    } catch (error) {
      setError("root", {
        message: "이미 등록된 이메일입니다."
      })
    }
  };

  async function registerUser(email, password) {
    try {
      const auth = getAuth();
      const user = await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='text-sm text-[#fff] font-semibold'>
          이메일로 회원가입
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
        <div className='h-24'>
          <label className='font-medium text-sm'>
            비밀번호 확인
          </label>
          <input 
            {...register("checkPassword")} 
            type='password' 
            placeholder='비밀번호를 다시 입력해주세요' 
            className='input-box'
          />
          {errors.checkPassword && (
            <p className='font-medium text-xs'>
              {errors.checkPassword.message}
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
      {isModalOpen && <RegisterSuccessModal onClick={closeModal} closeModal={closeModal} isModalOpen={isModalOpen} />} 
    </div>
  );
}

export default Signup;
