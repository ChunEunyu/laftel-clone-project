import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import useScroll from '../../../hooks/useScroll';
import { navRightListStyle, authLinkStyle, hamburgerIconStyle } from './NavRightListStyle';
import VerticalSideBar from '../VerticalSideBar/VerticalSideBar';
import useSideBarStore from '../../../stores/useSideBarStore';
import useAuthStore from '../../../stores/useAuthStore';
import SearchBar from '../SearchBar/SearchBar';
const NavRightList = () => {
  const isScrolled = useScroll(); // 스크롤 여부
  const { userData, setUserData } = useAuthStore(); // 로그인 여부
  const { isSideBarVisible, setIsSideBarVisible } = useSideBarStore();  // 사이드바 보이는 지 여부
  
  // 햄버거를 클릭하면 사이드바가 보인다.
  const handleHamburgerClick = () => {
    setIsSideBarVisible(!isSideBarVisible);
  }

  // 로그아웃 버튼 클릭시 로그아웃됨.
  const handleLogout = () => {
    setUserData(null);
  };

  return (
    <div className={isScrolled? navRightListStyle.scrolled : navRightListStyle.base}>
        <SearchBar isHome={true} />
        {userData !== null? (
          <button
            className={isScrolled ? authLinkStyle.scrolled : authLinkStyle.base}
            onClick={handleLogout}
          >
            로그아웃
          </button>
          ) 
          : 
          (
            <Link
              to="/auth"
              className={isScrolled ? authLinkStyle.scrolled : authLinkStyle.base}
            >
              로그인/가입
            </Link>
          )}
        <RxHamburgerMenu 
          className={isScrolled? hamburgerIconStyle.scrolled : hamburgerIconStyle.base}  
          onClick={handleHamburgerClick}
        />
        <VerticalSideBar />
    </div>
  );
}

export default NavRightList;
