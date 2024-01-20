const footerSnsList = [
    { icon: <AiFillTwitterCircle />, src: "https://twitter.com/laftel_net"},
    { icon: <AiOutlineYoutube />, src: "https://www.youtube.com/channel/UCI7lPoS1I3zOOePX9ph4iAA"},
    { icon: <AiOutlineInstagram />, src: "https://www.instagram.com/laftel_net/"},
    { icon: <FaTiktok />, src: "https://www.tiktok.com/@laftel_official"},
];

const mappedSnsList = footerSnsList.map((item, index) => (
    <StyledList key={index}>
        <a href={item.src} target="_blank" rel="noopener noreferrer">
            {item.icon}
        </a>
    </StyledList>
));