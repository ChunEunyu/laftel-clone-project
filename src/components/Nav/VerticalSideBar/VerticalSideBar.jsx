import { useState, useEffect } from "react";

import { IoCloseOutline } from "react-icons/io5";
import { FaRegCheckSquare } from "react-icons/fa";
import { MdOutlineCalendarToday } from "react-icons/md";
import { VscSparkle } from "react-icons/vsc";
import { IoMdCard } from "react-icons/io";

import { sideBarStyle, closeIconStyle, boundaryStyle, laftelIntroStyle, sideBarMenuButton } from './VerticalSideBarStyle';
import useSideBarStore from '../../../stores/useSideBarStore';
import { Logo } from '../../../assets/Svgs/Logo/Logo';
import Button from 'react-bootstrap/Button';
import { Character } from '../../../assets/Svgs/Character/Character';
import { Link } from "react-router-dom";

import useAuthStore from "../../../stores/useAuthStore";

const VerticalSideBar = () => {
  const [prevOverflow, setPrevOverflow] = useState('auto');
  const { isSideBarVisible, setIsSideBarVisible } = useSideBarStore();
  const { userData, setUserData } = useAuthStore();

  const toggleSideBarVisibility = () => {
    setIsSideBarVisible(!isSideBarVisible);
  }

  const handleLogout = () => {
    setUserData(null);
  };


  useEffect(() => {
    if (isSideBarVisible) {
      setPrevOverflow(document.body.style.overflow);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = prevOverflow;
    }

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isSideBarVisible, prevOverflow]);

  return (
    <>
      {isSideBarVisible && (
        <div className={sideBarStyle.base}>
          <IoCloseOutline className={closeIconStyle.base} onClick={toggleSideBarVisibility} />
          <div className={laftelIntroStyle.base}>
            <div>
              <Logo color='#816bff' width="90" height="50"  />
              <div className={laftelIntroStyle.phrase}>
                라프텔에 오신 것을 <br />
                환영합니다!
              </div>
            </div>
            <Character width="110" height="110" />
          </div>
          {userData? (
            <Button 
              as={Link}
              to='/'
              className={sideBarMenuButton.auth} 
              style={{backgroundColor:'#816bff', borderBlockColor:'#816bff'}}
              onClick={handleLogout}
            >
              <span className={sideBarMenuButton.authText}>
                로그아웃
              </span>
            </Button>
          ):(
            <Button 
              as={Link}
              to='/auth'
              className={sideBarMenuButton.auth} 
              style={{backgroundColor:'#816bff', borderBlockColor:'#816bff'}}
            >
              <span className={sideBarMenuButton.authText}>
                로그인·가입
              </span>
            </Button>
          )}
          <div className={boundaryStyle.base}></div>
          <Button
            variant="light"
            as={Link}
            to='/finder'
            className={sideBarMenuButton.textButton}
          >
            <div className="flex">
              <FaRegCheckSquare className={sideBarMenuButton.icon} />
              <span className={sideBarMenuButton.text}>
                태그검색
              </span>
            </div>
          </Button>
          <Button 
            variant="light"
            as={Link}
            to='/daily'
            className={sideBarMenuButton.textButton}
          >
            <div className="flex">
              <MdOutlineCalendarToday className={sideBarMenuButton.icon} />
              <span className={sideBarMenuButton.text}>
                요일별 신작
              </span>
            </div>
          </Button>
          <Button 
            variant="light"
            as={Link}
            to='/themes'
            className={sideBarMenuButton.textButton}
          >
            <div className="flex">
              <VscSparkle className={sideBarMenuButton.icon} />
              <span className={sideBarMenuButton.text}>
                테마추천
              </span>
            </div>
          </Button>
          <div className={boundaryStyle.base}></div>
          <Button 
            variant="light"
            as={Link}
            to='/membership'
            className={sideBarMenuButton.textButton}
          >
            <div className="flex">
              <IoMdCard className={sideBarMenuButton.icon} />
              <span className={sideBarMenuButton.text}>
                라프텔 멤버십
              </span>
            </div>
          </Button>
        </div>
      )}
    </>
  );
}

export default VerticalSideBar;
