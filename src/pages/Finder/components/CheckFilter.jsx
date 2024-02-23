import { FaArrowRotateRight } from "react-icons/fa6";
import useFinderStore from '../../../stores/useFinderStore';

const CheckFilter = () => {
  const { checkedItem, setCheckedItem, setResetCheckedItem } = useFinderStore();

  // 필터 리스트
  const filter = [
    {
      id: 0,
      name: '장르',
      variable_name: 'main_tag',
      content: ['BL','GL 백합','SF','개그','공포','드라마','로맨스','모험','무협',
      '미스터리','범죄','성인','스릴러','스포츠','시대물','아동','아이돌','악역영애',
      '액션','음식','음악','이세계','일상','재난','추리','치유','특촬','판타지','하렘'],
    },
    {
      id: 1,
      name: '태그',
      variable_name: 'main_tag',
      content: ['가족','감동','게임','동물','동양풍','두뇌싸움','로봇','루프물','마법소녀',
      '먼치킨','무거움','배틀','뱀파이어','복수','삼각관계','서양풍','선생님','성별전환','성장',
      '슬픔','시간여행','역하렘','연예인','열혈','오타쿠','요괴 및 괴물','육아','정치','좀비',
      '주체적 여성','짝사랑','철학','퇴마','학교'],
    },
    {
      id: 2,
      name: '년도',
      variable_name: 'air_year_quarter',
      content: ['2024년 1분기','2023년 4분기','2023년 3분기','2023년 2분기','2023년 1분기',
      '2022년 4분기','2022년 3분기','2022년 2분기','2022년 1분기','2021년','2020년','2019년',
      '2018년','2017년','2016년','2015년','2014년','2013년','2012년','2011년','2010년','2000년대',
      '2000년대 이전'],
    },
    {
      id: 3,
      name: '방영',
      variable_name: 'is_ending',
      content: ['방영중','완결'],
    },
    {
      id: 4,
      name: '출시타입',
      variable_name: 'medium',
      content: ['TVA','극장판','OVA'],
    }
  ];
  
  // 체크 표시한 요소들을 확인합니다. 
  const handleChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    setCheckedItem(value, isChecked);
  };
  
  // 모든 체크를 해제합니다.
  const resetCheck = () => {
    setResetCheckedItem();
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
  };

  console.log('selected', checkedItem);

  return (
    <div className='overflow-y-scroll flex flex-col h-[82vh] w-[350px] bg-[#fff] pr-3 pb-20'>
      <div className='flex flex-row justify-between  py-3'>
        <div className='font-semibold text-lg'>필터</div>
        <div className='flex flex-row'>
          <FaArrowRotateRight className='mt-1 mr-1' />
          <span 
            className='font-semibold text-md mb-2'
            onClick={resetCheck}
          >
            전체 초기화
          </span>
        </div>
      </div>
      {filter.map((item)=>(
        <div>
          <label className='font-semibold text-lg mb-2'>
            {item.name}
          </label>
          {item.content.map((i)=>(
            <div className='flex'> 
              <input className='mr-1' type="checkbox" value={i} onChange={(event)=>handleChange(event)} />
              <span>{i}</span>
            </div>
          ))}
          <br />
        </div>
      ))}
    </div>
  );
}

export default CheckFilter;
