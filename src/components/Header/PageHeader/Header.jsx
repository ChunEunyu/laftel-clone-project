import React from 'react';
import { Logo } from '../../../assets/Svgs/Logo/Logo';
import { Link } from 'react-router-dom';
import { leftMenuListStyle, leftMenuStyle, navLeftListStyle} from '../../Nav/NavLeftList/NavLeftListStyle'
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { headerStyle } from '../HeaderStyle';
import { navRightListStyle, searchIconStyle, authLinkStyle, hamburgerIconStyle } from '../../Nav/NavRightList/NavRightListStyle';
import VerticalSideBar from '../../Nav/VerticalSideBar/VerticalSideBar';
import useSideBarStore from '../../../stores/useSideBarStore';

const Header = () => {
    const { isSideBarVisible, setIsSideBarVisible } = useSideBarStore();

    const toggleSideBarVisibility = () => {
        setIsSideBarVisible(!isSideBarVisible);
    }

    const handleHamburgerClick = () => {
        toggleSideBarVisibility();
    }

    const categories = [
        { name: "태그검색", src:"/finder"},
        { name: "요일별 신작", src: "/daily" },
        { name: "테마추천", src: "/themes" },
        { name: "멤버십", src: "/membership" },
    ];

    const mappedCategories = categories.map((item, index)=>(
        <li key={index} className={leftMenuListStyle.scrolled}>
            <Link    
                className={leftMenuStyle.scrolled}
                to={item.src} >
                {item.name}
            </Link>
        </li>
    ));

  return (
    <div className={headerStyle.scrolled}>
        <div className={navLeftListStyle.scrolled}>
            <Link to='/'>
                <Logo color={'black'} width='84' height='30' />
            </Link>
            {mappedCategories}
        </div>
        <div className={navRightListStyle.scrolled} >
            <IoSearch className={searchIconStyle.scrolled} />
            <Link 
                to="/auth"
                className={authLinkStyle.scrolled}>
                로그인/가입
            </Link>
            <RxHamburgerMenu 
                className={hamburgerIconStyle.scrolled}  
                onClick={handleHamburgerClick}
            />
            <VerticalSideBar />
        </div>
    </div>
  );
}

export default Header;
