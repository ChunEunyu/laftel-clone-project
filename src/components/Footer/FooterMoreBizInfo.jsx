import React, { useState } from 'react';
import { 
    MdExpandMore,
    MdExpandLess 
} from "react-icons/md";

const FooterMoreBizInfo = () => {

    const [moreInfoText, setMoreInfoText] = useState(false);
    const moreBusinessInformation = () => {
        if (moreInfoText) {
            setMoreInfoText(false);
        } else {
            setMoreInfoText(true);
        }
    }

    return (
    <div className='font-bold text-xs' >
      {moreInfoText ? (
        <>
            <div className='flex text-sm cursor-pointer' onClick={moreBusinessInformation}>
                (주)라프텔 사업자 정보 
                <MdExpandLess className='mt-1' />
            </div><br />
            <div>
                상호 : 주식회사 라프텔 / 대표 : 박종원 <br />
                주소 : 서울특별시 영등포구 국제금융로 10, 12층 1208호(여의도동, 서울국제 금융센터 투아이에프씨) <br />
                사업자등록번호 : 535-86-02250 / 통신판매번호 : 제 2022-서울영등포-3578호 <br />
                이메일 : contact@laftel.net / 대표전화 : 1644-1052 <br />
            </div>
        </>
        ) : (
        <>
            <div className='flex text-sm cursor-pointer' onClick={moreBusinessInformation}>
                (주)라프텔 사업자 정보 
                <MdExpandMore className='mt-1' />
            </div>
        </>
        ) }
        <br />
    </div>
  );
}

export default FooterMoreBizInfo;
