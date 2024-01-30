import { useMediaQuery } from 'react-responsive';

const isDesktop = useMediaQuery({ minWidth: 1100});
const isTablet = useMediaQuery({ minWidth: 800});
const isMobile = useMediaQuery({ minWidth: 0});