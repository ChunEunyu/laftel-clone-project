import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import useScroll from '../../../hooks/useScroll';
import { navRightListStyle, searchIconStyle, searchBarStyle, searchInputBarStyle, authLinkStyle, hamburgerIconStyle } from './NavRightListStyle';
import VerticalSideBar from '../VerticalSideBar/VerticalSideBar';
import useSideBarStore from '../../../stores/useSideBarStore';

const NavRightList = () => {
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
  const isScrolled = useScroll();
  const { isSideBarVisible, setIsSideBarVisible } = useSideBarStore();
  const navigate = useNavigate();

  const toggleSideBarVisibility = () => {
    setIsSideBarVisible(!isSideBarVisible);
  }

  const handleHamburgerClick = () => {
    toggleSideBarVisibility();
  }

  const showSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  }
  
  // 입력한 검색어를 읽고 url을 바꿔주기
  const search = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      console.log(keyword);
      navigate(`/search/?q=${keyword}`);
    }
  }


  return (
    <div className={isScrolled? navRightListStyle.scrolled : navRightListStyle.base}>
        {isSearchBarVisible?
          <div className={searchBarStyle.base}>
            <IoSearch 
              className={searchIconStyle.active} 
              onClick={showSearchBar}
            />
            <input
              className={searchInputBarStyle.base}
              type="text"
              onKeyPress={(event)=>search(event)}
              placeholder="제목으로 검색"
            />
          </div>
          :
          <IoSearch 
            className={isScrolled? searchIconStyle.scrolled : searchIconStyle.base} 
            onClick={showSearchBar}
          />
        }
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
