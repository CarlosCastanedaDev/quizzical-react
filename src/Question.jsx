import React, { useEffect, useState } from 'react';

export default function Question({ question }) {
  return (
    <div className=' flex flex-col text-[#293264] text-2xl px-20 space-y-6 font-karla'>
      <p className='font-bold'>{question}</p>
      <p>Answers</p>
      <div className='border-solid border-[#4D5B9E] border-2 w-full'></div>
    </div>
  );
}
