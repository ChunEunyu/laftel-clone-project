import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './AuthForm.css'
import { Logo } from '../../../../assets/Svgs/Logo/Logo';
import Button from 'react-bootstrap/Button';
import Google from '../../../../assets/Svgs/Sns/Google';
import { MdEmail } from "react-icons/md";
import { GoogleAuth } from '../SocialAuth/GoogleAuth';
import useAuthStore from '../../../../stores/useAuthStore';

const AuthForm = () => {
  const { handleGoogleLogin } = GoogleAuth();
  const { userData, setUserData } = useAuthStore();
  const navigate = useNavigate();

  useEffect(()=>{
    if (userData !== null) {
      navigate('/');
    }

  },[userData, navigate])

  function handleLoginSuccess(data) {
    setUserData(data.user);
    navigate('/');
  }

  return (
    <div className='form-box'>
      <Logo width='200px' height='50px' /><br/>
      <div className='font-semibold text-xl text-center opacity-90'>
        <span>동시방영 신작부터 역대 인기작까지</span><br/>
        <span>한 곳에서 편-안하게!</span>
      </div><br /><br />
      <div className='w-full flex flex-row '>
        <Button 
          as={Link}
          to="/auth/email"
          className='w-full h-10 ' 
          style={{backgroundColor:'#816bff', borderBlockColor:'#816bff'}} 
          size="lg"
        >
          <div className='flex items-center justify-center'>
            <MdEmail className="mr-3" />
            <span className='text-sm font-semibold'>이메일로 시작</span>
          </div>
        </Button>
      </div><br />
      <div className='text-sm'>또는</div><br/>
      <div className='flex'>
        <button onClick={() => handleGoogleLogin(handleLoginSuccess)}>
          <Google />
        </button>
      </div>
    </div>
  );
}

export default AuthForm;
