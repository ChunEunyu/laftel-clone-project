import { useEffect, useState} from 'react';
import { Logo } from '../Svgs/Logo/Logo';
import { Link } from 'react-router-dom';
import useScroll from '../../hooks/useScroll';

const NavLeftList = () => {

    const isScrolled = useScroll();

    const categories = [
        { name: "태그검색", src:"/finder"},
        { name: "요일별 신작", src: "/daily" },
        { name: "테마추천", src: "/themes" },
        { name: "멤버십", src: "/membership" },
    ];

    const mappedCategories = categories.map((item, index)=>(
        <li key={index} className='list-none inline-block'>
            <Link 
                className={`
                    ${isScrolled ? 
                        'text-black' 
                        : 
                        'text-white '
                    } 
                    text-sm no-underline font-bold text-opacity-80 
                    tracking-tighter pt-1 pb-0`
                }
                to={item.src} >
                {item.name}
            </Link>
        </li>
    ));

  return (
    <>
    {!isScrolled?(
        <>
            <div className={`max-lg:hidden flex gap-4`}>
                <Logo />
                <div className='flex gap-4'>{mappedCategories}</div>
            </div>
        </>
    ):(
        <>
            <div className={`max-lg:flex-col max-lg:mx-auto flex gap-4`}>
                <Logo color='black' />
                <div className='max-lg:hidden flex space-x-6'>{mappedCategories}</div>
            </div>
        </>
    )}
    </>
  );
}

export default NavLeftList;
