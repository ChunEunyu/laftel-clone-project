import Header from '../../components/Header/PageHeader/Header';

const NotFound = () => {
  return (
    <div>
      <Header />
      <div className='pt-40 flex-col justify-center h-screen text-center'>
        <img
          className="mx-auto"
          width="322"
          height="287"
          src='https://laftel.net/_next/image?url=%2Fassets%2Fwebp%2Fpuming_404.webp&w=384&q=75' 
        />
        <br />
        <h3 className='font-semibold'>이런, 이미 <span className='text-[#816BFF]'>사라진 페이지</span>군요.</h3>
        <p>
          삭제된 페이지거나 잘못된 주소입니다. 라프텔 홈으로 이동해주세요.<br />
          아니면, 함께 범인을 찾아보시겠어요?
        </p>
      </div>
    </div>
  );
}

export default NotFound;
