import { Logo } from '../../../assets/Svgs/Logo/Logo';
import { Link } from 'react-router-dom';
import useScroll from '../../../hooks/useScroll';
import { leftMenuListStyle, leftMenuStyle, navLeftListStyle } from './NavLeftListStyle';

const NavLeftList = () => {
    const isScrolled = useScroll();

    const categories = [
        { name: "태그검색", src:"/finder"},
        { name: "요일별 신작", src: "/daily" },
        { name: "테마추천", src: "/themes" },
        { name: "멤버십", src: "/membership" },
    ];

    const mappedCategories = categories.map((item, index)=>(
        <li key={index} className={isScrolled? leftMenuListStyle.scrolled : leftMenuListStyle.base}>
            <Link 
                className={isScrolled? leftMenuStyle.scrolled : leftMenuStyle.base}
                to={item.src} >
                {item.name}
            </Link>
        </li>
    ));

  return (
    <div className={isScrolled? navLeftListStyle.scrolled : navLeftListStyle.base}>
        <Logo color={isScrolled? 'black' : 'white'} width='84' height='30' />
        {mappedCategories}
    </div>
  );
}

export default NavLeftList;
