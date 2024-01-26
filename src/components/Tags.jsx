import React from 'react';

const Tags = () => {
  return (
    <div className='flex flex-col md:flex-row justify-center'>
      <div className="p-1 mr-2 my-8 inline-block text-primary font-normal bg-strokeGray rounded-lg py-2">
        UI/UX Design 
      </div>

      <div className="p-1 mr-2 my-8 inline-block text-primary font-normal bg-strokeGray rounded-lg py-2">
        $50k-$90k
      </div>

      <div className="p-1 mr-2 my-8 inline-block text-primary font-normal bg-strokeGray rounded-lg py-2">
        Another Tag 
      </div>
    </div>
  );
}

export default Tags;
