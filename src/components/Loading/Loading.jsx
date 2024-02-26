import React from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loading = () => {
  return (
    <div className="pt-40 flex justify-center items-start h-screen">
      <Spinner animation="grow" />
    </div>
  );
}

export default Loading;
