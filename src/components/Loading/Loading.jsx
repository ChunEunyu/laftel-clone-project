import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Header from '../Header/PageHeader/Header';

const Loading = () => {
  return (
    <div>
        <Header />
        <div className="pt-40 flex justify-center items-start h-screen">
            <Spinner animation="grow" />
        </div>
    </div>
  );
}

export default Loading;
