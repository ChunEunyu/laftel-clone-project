import { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import useScroll from '../../hooks/useScroll';
import VerticalNavList from './VerticalNavList';

const NavRightList = () => {

  const isScrolled = useScroll();
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className={`max-lg:gap-2 lg:gap-5 flex ${isScrolled ? 'text-black' : 'text-white'}`}>
        <IoSearch
          className=' 
            pb-0 pt-0 mt-2
            cursor-pointer 
            w-6 h-6' />
        <Link 
            to="/auth"
            className={`
              max-lg:hidden
              pb-0 pt-0 mt-2
              text-sm text-opacity-80 
              no-underline font-bold 
              tracking-tighter 
              ${isScrolled ? 'text-black' : 'text-white'}
            `}>
            로그인/가입
        </Link>
        <RxHamburgerMenu 
          className={`
            lg:hidden 
            pb-0 pt-0 mt-2
            w-6 h-6
            cursor-pointer
            ${isScrolled ? 'text-black' : 'text-white'}
          `} 
          onClick={toggleNavVisibility} />
        {isNavVisible && (
          <VerticalNavList />
        )}
    </div>
  );
}

export default NavRightList;
