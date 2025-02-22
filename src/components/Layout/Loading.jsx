import React from 'react';

const Loading = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <p className='text-[30px] text-blue-500 mx-4'>Looding...</p>
    </div>
  );
}

export default Loading;