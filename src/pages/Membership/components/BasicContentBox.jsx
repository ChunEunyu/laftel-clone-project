import React from 'react';
import { FaCheck } from "react-icons/fa6";

const BasicContentBox = () => {
  const basicBenefits = [
    '광고 없이 감상',
    '프로필 1인 · 동시재생 1회선',
    '최신화 시청',
    '다운로드 지원',
    'FHD 화질 지원',
    'TV 앱 지원'
  ];
  return (
    <div className='bg-[#ffffff] w-[550px] h-[400px] text-[#000] pt-[30px] px-5 rounded-md border-1 border-[#d3d3d3]'>
        <div className='flex-col'>
            <p className='text-2xl font-semibold'>
                베이직
            </p>
            <p className='text-md font-semibold'>
                월 9,900원
            </p>
            <div className='flex-col ml-2'>
                {basicBenefits.map((item) => (
                    <div className='flex mb-3'>
                        <FaCheck className='text-[#816BFF] mr-2 mt-1' />
                        <span className='text-[#323232]'>
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default BasicContentBox;
