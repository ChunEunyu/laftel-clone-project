import { useEffect, useState } from 'react';
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { navRightListStyle, searchIconStyle, searchBarStyle, searchInputBarStyle, authLinkStyle, hamburgerIconStyle } from '../NavRightList/NavRightListStyle.js';
import useScroll from '../../../hooks/useScroll';
import useWindowSize from '../../../hooks/useWindowSize.js';
import useSearchStore from '../../../stores/useSearchStore.jsx';

const SearchBar = ({ isHome }) => {
  const navigate = useNavigate();
  const isScrolled = useScroll(); // 스크롤 여부
  const isMaxLG = useWindowSize();
  const [isSearchBarVisible, setIsSearchBarVisible] = useState(false); // 돋보기 클릭 여부
  const { keyword, setKeyword } = useSearchStore();

  // 돋보기 클릭 여부.
  const showSearchBar = () => {
    setIsSearchBarVisible(!isSearchBarVisible);
  };

  // 입력한 검색어를 읽고 url을 바꿔주기.
  const search = (event) => {
    if (event.key === "Enter") {
      const newKeyword = event.target.value;
      setKeyword(newKeyword); 
      navigate(`/search/?q=${newKeyword}`);
    }
  };

  useEffect(()=>{
    if (isSearchBarVisible && !isMaxLG) {
      navigate('/searching');
    }
  },[isSearchBarVisible, isMaxLG])

  return (
    <div className={isScrolled? navRightListStyle.scrolled : navRightListStyle.base}>
      {isSearchBarVisible && isMaxLG && (
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
      )}
      {!isSearchBarVisible && (
        isHome? (
          <IoSearch 
            className={isScrolled ? searchIconStyle.scrolled : searchIconStyle.base} 
            onClick={showSearchBar}
          />
        ) : (
          <IoSearch 
            className={searchIconStyle.scrolled} 
            onClick={showSearchBar}
          />
        )
      )}

    </div>
  );
}

export default SearchBar;
