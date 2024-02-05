import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import useScroll from '../../../hooks/useScroll';
import { navRightListStyle, searchIconStyle, authLinkStyle, hamburgerIconStyle } from './NavRightListStyle';
import VerticalSideBar from '../VerticalSideBar/VerticalSideBar';
import useSideBarStore from '../../../stores/useSideBarStore';

const NavRightList = () => {
  const isScrolled = useScroll();
  const { isSideBarVisible, setIsSideBarVisible } = useSideBarStore();

  const toggleSideBarVisibility = () => {
    setIsSideBarVisible(!isSideBarVisible);
  }

  const handleHamburgerClick = () => {
    toggleSideBarVisibility();
  }

  return (
    <div className={isScrolled? navRightListStyle.scrolled : navRightListStyle.base} >
        <IoSearch className={isScrolled? searchIconStyle.scrolled : searchIconStyle.base} />
        <Link 
            to="/auth"
            className={isScrolled? authLinkStyle.scrolled : authLinkStyle.base}>
            로그인/가입
        </Link>
        <RxHamburgerMenu 
          className={isScrolled? hamburgerIconStyle.scrolled : hamburgerIconStyle.base}  
          onClick={handleHamburgerClick}
        />
        <VerticalSideBar />
    </div>
  );
}

export default NavRightList;
