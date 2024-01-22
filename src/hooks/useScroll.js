import { useState, useEffect, useDebugValue} from 'react';

const useScroll = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(()=>{

        const handleScroll = () => {
            const scrolled = window.scrollY > 100;
            setIsScrolled(scrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);
  return isScrolled;
}

export default useScroll;
