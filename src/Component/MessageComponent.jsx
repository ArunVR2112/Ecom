import React from 'react';

const MessageComponent = ({ isVisible }) => {
  return (
    <div>
      {isVisible && (
        <div className='flex right-0 rounded-sm w-96 fixed p-2 items-end mt-20 bg-slate-100 text-black'>
          <p className='text-xl'>
            Item added To Cart check out <span className='text-xl text-red-600'>!</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default MessageComponent;
