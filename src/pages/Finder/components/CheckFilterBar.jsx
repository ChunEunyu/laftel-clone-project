import { useState, useRef, useEffect  } from 'react';
import Button from 'react-bootstrap/Button';
import { IoFilter } from "react-icons/io5";
import CheckFilter from './CheckFilter';

const CheckFilterBar = () => {
  const sidebarRef = useRef(null);
  const [prevOverflow, setPrevOverflow] = useState('auto');
  const [isSideBarVisible, setIsSideBarVisible] = useState(false);
  
  // 필터 보기 버튼을 클릭하면 필터 사이드바가 나타남
  const toggleSideBarVisibility = () => {
    setIsSideBarVisible(!isSideBarVisible);
  }

  // 사이드바가 열린 상태에서 사이드바 외부를 클릭하면 사이드바가 닫힘
  useEffect(() => {
    function handleClickOutside(event) {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSideBarVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarRef]);

  // 사이드바의 가시 여부에 따라 스크롤 여부를 정하기
  useEffect(() => {
    if (isSideBarVisible) {
        // 사이드바가 보이면 페이지의 스크롤이 막힘
        setPrevOverflow(document.body.style.overflow);
        document.body.style.overflow = 'hidden';
    } else {
        // 사이드바가 보이지 않으면 이전 스크롤 상태로 복원
        document.body.style.overflow = prevOverflow;
    }

    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [isSideBarVisible, prevOverflow]);

  return (
    <div>
      <div className='flex flex-row justify-between'>
        <div className='text-sm text-[#565656]'>선택된 필터</div>
        <Button 
            className='w-20 h-10' 
            variant="light"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: '7px'
            }}
            onClick={toggleSideBarVisibility}
        >
            <IoFilter className='mb-1 mr-1' />
            <span className='text-xs font-semibold text-[#565656] pb-1'>필터</span>
        </Button>
      </div>
      {isSideBarVisible && (
        <div ref={sidebarRef} className='z-50 absolute h-screen pl-5 top-0 bottom-0 right-0 w-[340px] bg-white pt-3 flex flex-col'>
            <CheckFilter />
        </div>
      )}
    </div>
  );
}

export default CheckFilterBar;
