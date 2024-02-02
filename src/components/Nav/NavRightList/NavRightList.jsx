import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import useScroll from '../../../hooks/useScroll';
import { navRightListStyle, searchIconStyle, authLinkStyle, hamburgerIconStyle } from './NavRightListStyle';

const NavRightList = () => {

  const isScrolled = useScroll();
  /*
  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };*/

  return (
    <div className={isScrolled? navRightListStyle.scrolled : navRightListStyle.base}>
        <IoSearch
          className={searchIconStyle.base} />
        <Link 
            to="/auth"
            className={isScrolled? authLinkStyle.scrolled : authLinkStyle.base}>
            로그인/가입
        </Link>
        <RxHamburgerMenu 
          className={isScrolled? hamburgerIconStyle.scrolled : hamburgerIconStyle.base}
          />
        
    </div>
  );
}

export default NavRightList;
