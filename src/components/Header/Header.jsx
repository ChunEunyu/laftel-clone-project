import React from 'react';
import NavLeftList from '../Nav/NavLeftList';
import NavRightList from '../Nav/NavRightList';

const Header = () => {
  return (
    <div className='pt-4 pl-12 pr-12 flex justify-between'>
      <NavLeftList />
      <NavRightList className='' />
    </div>
  );
}

export default Header;
