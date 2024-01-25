import React, { useState } from 'react';
import './JoinForm.css'
import { useForm } from 'react-hook-form';

const JoinForm = () => {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example"));

  return (
    <div className='joinForm-box'>
      <div className='font-semibold'>이메일로 시작</div><br />
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label className='font-semibold text-sm'> 이메일 </label>
        <input 
          className='input-box' 
          defaultValue="test" 
          {...register("example")} 
          placeholder='이메일을 입력하세요' />
        
        {/* include validation with required or other standard HTML validation rules */}
        <label className='font-semibold text-sm'>비밀번호</label>
        <input 
          className='input-box' 
          placeholder='비밀번호를 입력하세요' 
          {...register("exampleRequired", { required: true })} 
        />
        <label className='font-semibold text-sm'>비밀번호 확인</label>
        <input 
          className='input-box' 
          placeholder='비밀번호를 입력하세요' 
          {...register("exampleRequired", { required: true })} 
        />
        
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}
        
        <input className='submit-button' type="submit" />
      </form>
    </div>
  );
}

export default JoinForm;
