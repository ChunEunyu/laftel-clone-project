import React from 'react';
import { Logo } from '../Svgs/Logo/Logo';
import { Link } from 'react-router-dom';

const NavLeftList = () => {

    const categories = [
        { name: "태그검색", src:"/finder"},
        { name: "요일별 신작", src: "/daily" },
        { name: "테마추천", src: "/themes" },
        { name: "멤버십", src: "/membership" },
    ];

    const mappedCategories = categories.map((item, index)=>(
        <li key={index} className='list-none inline-block'>
            <Link 
                className='text-sm text-white no-underline font-bold text-opacity-80 tracking-tighter pt-1 pb-0'
                to={item.src} >
                {item.name}
            </Link>
        </li>
    ));

  return (
    <div className='flex gap-4'>
        <Logo />
        {mappedCategories}
    </div>
  );
}

export default NavLeftList;
