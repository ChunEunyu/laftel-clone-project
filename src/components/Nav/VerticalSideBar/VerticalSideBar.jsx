import React from 'react';
import { IoCloseOutline } from "react-icons/io5";

const VerticalSideBar = () => {
  return (
    <div className='lg:hidden absolute top-0 right-0 w-[250px] h-screen bg-white'>
        <IoCloseOutline />
      

    </div>
  );
}

export default VerticalSideBar;
