import React, { useEffect } from 'react';
import useWindowSize from '../../../hooks/useWindowSize';
import { useNavigate } from 'react-router-dom';
import { IoChevronBackSharp } from "react-icons/io5";
import { searchIconStyle, searchBarStyle, searchInputBarStyle } from '../NavRightList/NavRightListStyle'
import { IoSearch } from "react-icons/io5";
import useSearchStore from '../../../stores/useSearchStore';
import { IoSearchCircleOutline } from "react-icons/io5";

const Searching = () => {
  const isMaxLG = useWindowSize();
  const navigate = useNavigate();
  const { setKeyword, searchHistory, addToSearchHistory } = useSearchStore();

  // 입력한 검색어를 읽고 url을 바꿔주기.
  const search = (event) => {
    if (event.key === "Enter") {
      const newKeyword = event.target.value;
      setKeyword(newKeyword); 
      addToSearchHistory(newKeyword);
      navigate(`/search/?q=${newKeyword}`);
    }
  };

  // 윈도우 사이즈가 커지면 이전 페이지로 이동
  useEffect(() => {
    if (isMaxLG) {
      navigate(-1);
    }
  },[isMaxLG]);

  // 뒤로가기 버튼 클릭 시 이전 페이지로 이동
  const goBack = () => {
    navigate(-1); 
  };

  return (
    <div>
      <div className='flex px-3 py-2 w-full'>
        <div>
          <IoChevronBackSharp 
            onClick={goBack}
            className='w-7 h-7 mr-2 mt-2' 
          />
        </div>
        <div className={searchBarStyle.searching}>
          <IoSearch 
            className={searchIconStyle.searching} 
          />
          <input
            className={searchInputBarStyle.searching}
            type="text"
            onKeyPress={(event)=>search(event)}
            placeholder="제목으로 검색"
          />
        </div>
      </div>
      <div className='w-full h-[1px] bg-[#EFEFEF]'></div>
      <div className='p-3'>
        <p className='font-semibold text-[#816BFF]'>이전 검색어</p>
        {searchHistory.slice(0, 5).map((item, index) => (
          <div>
            <span 
              className='font-semibold text-md' 
              key={index}
            >
              {item}
            </span>
            <br />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Searching;
