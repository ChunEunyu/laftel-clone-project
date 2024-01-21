import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";

const NavRightList = () => {
  return (
    <div className='flex gap-5'>
        <FaSearch className='pb-0 pt-0 mt-2 cursor-pointer' color='#fff'/>
        <Link 
            to="/login"
            className='pb-0 pt-0 mt-1 text-sm text-white text-opacity-80 no-underline font-bold tracking-tighter '>
            로그인/가입
        </Link>
    </div>
  );
}

export default NavRightList;
