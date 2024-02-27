import React from 'react';
import ReactModal from 'react-modal';

const RegisterSuccessModal = ( {isModalOpen, closeModal} ) => {
  return (
    <ReactModal
      className="flex justify-center items-center w-100 h-50"
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      ariaHideApp={false}
      contentLabel="Pop up Message"
      shouldCloseOnOverlayClick={true}
    >
      <div className="bg-white p-4 rounded-lg w-64 h-48">
        <p className="mb-14 mt-4 ml-2">
          회원가입을 성공했습니다.
        </p>
        <button
          onClick={closeModal}
          className='bg-[#816bff] text-[#fff] w-full h-10 rounded-md'
        >
          닫기
        </button>
      </div>
    </ReactModal>
  );
}

export default RegisterSuccessModal;
