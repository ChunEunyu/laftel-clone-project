import React from 'react';
import NavLeftList from '../Nav/NavLeftList';
import NavRightList from '../Nav/NavRightList';
import useScroll from '../../hooks/useScroll';

const Header = () => {

  const isScrolled = useScroll();

  return (
      <div className={`
        pt-3 pb-4 pl-12 pr-12 fixed w-full 
        ${
          isScrolled ? 
            'max-lg:pr-2  bg-white transition duration-700 ease-in-out' 
            : 
            'max-lg:pr-2 transition duration-700 ease-in-out'
        }`}>
        <div className={`${!isScrolled ?'max-lg:flex-row-reverse':''} flex justify-between `}>
            <NavLeftList />
            <NavRightList />
        </div>
      </div>
  );
}

export default Header;
