import { useState } from 'react';
import { Logo } from '../../../assets/Svgs/Logo/Logo';
import { Link, useNavigate } from 'react-router-dom';
import { leftMenuListStyle, leftMenuStyle, navLeftListStyle} from '../../Nav/NavLeftList/NavLeftListStyle';
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { headerStyle } from '../HeaderStyle';
import { navRightListStyle, searchIconStyle, authLinkStyle, hamburgerIconStyle, searchBarStyle, searchInputBarStyle  } from '../../Nav/NavRightList/NavRightListStyle';
import VerticalSideBar from '../../Nav/VerticalSideBar/VerticalSideBar';
import useSideBarStore from '../../../stores/useSideBarStore';

const Header = () => {
    const navigate = useNavigate();
    const [isSearchBarVisible, setIsSearchBarVisible] = useState(false);
    const { isSideBarVisible, setIsSideBarVisible } = useSideBarStore();

    const toggleSideBarVisibility = () => {
        setIsSideBarVisible(!isSideBarVisible);
    }

    const handleHamburgerClick = () => {
        toggleSideBarVisibility();
    }

    const showSearchBar = () => {
        setIsSearchBarVisible(!isSearchBarVisible);
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

    // 입력한 검색어를 읽고 url을 바꿔주기
    const search = (event) => {
        if (event.key === "Enter") {
        let keyword = event.target.value;
        console.log(keyword);
        navigate(`/search/?q=${keyword}`);
        }
    }

  return (
    <div className={headerStyle.scrolled}>
        <div className={navLeftListStyle.scrolled}>
            <Link to='/'>
                <Logo color={'black'} width='84' height='30' />
            </Link>
            {mappedCategories}
        </div>
        <div className={navRightListStyle.scrolled} >
            {isSearchBarVisible?
                <div className={searchBarStyle.base}>
                    <IoSearch 
                        className={searchIconStyle.active} 
                        onClick={showSearchBar}
                    />
                    <input
                        className={searchInputBarStyle.base}
                        type="text"
                        onKeyPress={(event)=>search(event)}
                        placeholder="제목으로 검색"
                    />
                </div>
            :
            <IoSearch 
                className={searchIconStyle.scrolled} 
                onClick={showSearchBar}
            />
            }
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
