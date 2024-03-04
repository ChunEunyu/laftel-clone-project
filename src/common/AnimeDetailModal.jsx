import ReactModal from 'react-modal';
import { useState } from 'react';
import { FaStar } from "react-icons/fa";

import useAnimeCardStore from '../stores/useAnimeCardStore';

const AnimeDetailModal = () => {
  const { allInfo, } = useAnimeCardStore();
  const [ modalOpen, setModalOpen ] = useState(true);

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
      backgroundColor: "#002239", // 모달 내부 배경을 흰색으로 설정
      color: "white",
      padding: "35px", // 내부 여백 추가
      maxWidth: "80%", // 내용의 최대 너비 설정
      maxHeight: "100%", // 내용의 최대 높이 설정
      overflow: "auto", // 스크롤바 표시 설정
      border: "none",
    },
  };

  return (
    <ReactModal
      className='lg:w-[600px] lg:h-5/6 md:[500px] md:h-5/6 sm:w-full sm:h-5/6 xs:w-full xs:h-5/6 max-sm:w-full'
      isOpen={modalOpen}
      style={customModalStyles}
      ariaHideApp={false}
      shouldCloseOnOverlayClick={true}
    >
      <div className='flex flex-col items-center'>
        <div className='flex flex-row bg-[#303041] w-16 h-8 pl-3 pt-1 mb-2 rounded-lg'>
          <FaStar className='w-3 h-6 mr-1' />
          <p className="text-md font-semibold">{allInfo.avg_rating.toFixed(1)}</p>
        </div>
        <h2 className='font-bold'>{allInfo.name}</h2>
        <p className="text-sm">
          {allInfo.genre?
            allInfo.genre.join('ㆍ')
            :
            allInfo.main_tag.map((item, index)=>(
              <>
                {item.name}
                {index !== allInfo.main_tag.length - 1 && 'ㆍ'}
              </>
            ))}
        </p>
        <img 
          className='rounded-md w-[300px] mb-4'
          src={allInfo.img ? allInfo.img : allInfo.images[0].img_url} 
          alt='img'
        />
        <p className="text-sm ">{allInfo.content}</p>
      </div>
    </ReactModal>
  );
}

export default AnimeDetailModal;
