import ReactModal from 'react-modal';
import { useState } from 'react';
import useAnimeCardStore from '../stores/useAnimeCardStore';

const AnimeDetailModal = () => {
  const { allInfo, setAllInfo} = useAnimeCardStore();
  const [modalOpen, setModalOpen] = useState(true);

  console.log('AnimeDetailModal allInfo', allInfo);

  const customModalStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      width: "100%",
      height: "100vh",
      zIndex: "10",
      position: "fixed",
      top: "0",
      left: "0",
      border: "none",
    },
    content: {
      zIndex: "150",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      borderRadius: "10px",
      backgroundColor: "transparent", // 배경을 투명하게 설정
      justifyContent: "center",
      overflow: "auto",
      border: "none",
    },
  };
  
  return (
    <ReactModal
      className='lg:w-[1000px] lg:h-5/6 md:w-full md:h-5/6 sm:w-full sm:h-5/6 xs:w-full xs:h-5/6'
      isOpen={modalOpen}
      style={customModalStyles}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={false}
    >
      
    </ReactModal>
  );
}

export default AnimeDetailModal;
