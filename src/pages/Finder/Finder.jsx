import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/PageHeader/Header';
import CheckFilter from './components/CheckFilter';
import ContentAria from './components/ContentAria';
import CheckFilterBar from './components/CheckFilterBar';

const Finder = () => {
  
  return (
    <div>
      <Header />
      <div className='pt-20 pb-10 pl-10 pr-10 max-sm:px-4'>
        <h3 className='font-bold pb-4'>태그검색</h3>
        <div className='max-lg:hidden flex flex-row gap-10'>
          <CheckFilter />
          <ContentAria />
        </div>
        <div className='lg:hidden flex-col'>
          <CheckFilterBar />
          <ContentAria />
        </div>
      </div>
    </div>
  );
}

export default Finder;
