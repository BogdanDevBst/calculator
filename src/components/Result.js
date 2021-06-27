import React from 'react';

const Result = ({ children }) => {
  return (
    <div className="flex justify-end items-end text-5xl w-full result text-white rounded-t-md h-36 pr-2 pb-1">
      {children}
    </div>
  );
};

export default Result;
