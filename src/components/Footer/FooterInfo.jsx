const footerMenuList = [
    { name: "회사소개", src: "https://laftel.oopy.io/" },
    { name: "고객센터", src: "https://help.laftel.net/hc/ko"}, 
    { name: "공지사항", src: "https://help.laftel.net/hc/ko/sections/5987589202959"}, 
    { name: "이용약관", src: "https://policy.laftel.net/youth/2023/"}, 
    { name: "청소년보호정책", src: "https://policy.laftel.net/youth/2023/"}, 
    { name: "개인정보 처리방침", src: "https://policy.laftel.net/privacy/2023_12/"}, 
    { name: "저작권 표기", src: "https://laftel.net/copyrights/"}
];

const mappedMenuList = footerMenuList.map((item, index) => (
    <StyledList key={index}>
        <a href={item.src} target="_blank">
            {item.name}
        </a>
    </StyledList>
));