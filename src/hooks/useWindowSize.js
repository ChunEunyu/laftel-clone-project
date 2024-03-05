import { useEffect, useState } from 'react';

const useWindowSize = () => {
    const [isMaxLG, setIsMaxLG] = useState(false); 

    useEffect(() => {
        // 화면 사이즈가 max-lg인지 확인
        const checkMaxLG = () => {
          if (window.innerWidth <= 1024) {
            setIsMaxLG(false);
          } else {
            setIsMaxLG(true);
          }
        };
    
        // 페이지 로드 시 max-lg 상태 확인
        checkMaxLG();
    
        // resize 이벤트가 발생할 때마다 max-lg 상태 확인
        window.addEventListener('resize', checkMaxLG);
        return () => {
          window.removeEventListener('resize', checkMaxLG);
        };
      }, []);

    return isMaxLG;
};

export default useWindowSize;