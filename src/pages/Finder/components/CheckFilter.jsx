import { FaArrowRotateRight } from "react-icons/fa6";
import useFinderStore from '../../../stores/useFinderStore';
import { filterList } from "./FilterList";

const CheckFilter = () => {
  const { setCheckedItem, setResetCheckedItem } = useFinderStore();
  
  // 체크 표시한 요소들을 확인합니다. 
  const handleChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;
    const filterId = filterList.findIndex( filter => filter.content.includes(value));
    setCheckedItem(filterId, value, isChecked);
  };
  
  // 모든 체크를 해제합니다.
  const resetCheck = () => {
    setResetCheckedItem();
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => checkbox.checked = false);
  };

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
      {filterList.map((item)=>(
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
