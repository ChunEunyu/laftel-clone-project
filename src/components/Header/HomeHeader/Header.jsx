import React from 'react';
import NavLeftList from '../../Nav/NavLeftList/NavLeftList.jsx';
import NavRightList from '../../Nav/NavRightList/NavRightList.jsx';
import useScroll from '../../../hooks/useScroll.js';
import { headerStyle } from './HeaderStyle.js';

const Header = () => {

  const isScrolled = useScroll();

  return (
      <div className={isScrolled? headerStyle.scrolled: headerStyle.base}>
        <NavLeftList />
        <NavRightList />
      </div>
  );
}

export default Header;
