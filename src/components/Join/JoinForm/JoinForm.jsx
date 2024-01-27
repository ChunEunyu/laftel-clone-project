import React, { useState } from 'react';
import './JoinForm.css'
import { useForm } from 'react-hook-form';

const JoinForm = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  // 비밀번호와 비밀번호 확인 같은지 체크하기

  console.log(watch("example"));

  return (
    <div className='joinForm-box'>
      <div className='font-semibold'>이메일로 시작</div><br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className='font-semibold text-sm'> 이메일 </label>
        <input 
          className='input-box' 
          id='email'
          type='text'
          placeholder='이메일을 입력하세요' 
          // input의 기본 config
          {...register("email", {
            pattern: {
              value:
                /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
              message: "이메일 형식에 맞지 않습니다.",
            },
          })} 
          />
        
        <label className='font-semibold text-sm'>비밀번호</label>
        <input 
          className='input-box' 
          id="password"
          type="password"
          placeholder='비밀번호를 입력하세요' 
          {...register("password", { 
            minLength: {
              value: 7,
              message: "7자리 이상 비밀번호를 입력하세요.",
            },
          })} 
        />
        <label className='font-semibold text-sm'>비밀번호 확인</label>
        <input 
          className='input-box' 
          name='passwordCheck'
          type='password'
          placeholder='비밀번호를 확인하세요' 
          {...register("exampleRequired", { 
            required: true 
          })} 
        />
        
        <input className='submit-button' type="submit" />
      </form>
    </div>
  );
}

export default JoinForm;
