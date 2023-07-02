import React, { useEffect, useState } from 'react';

export default function Home({ startQuiz }) {
  return (
    <div className='bg-[#F5F7FB] flex flex-col justify-center items-center h-screen space-y-4'>
      <h1 className='text-[293264] text-5xl'>Quizzical</h1>
      <p>Put your knowledge to the test</p>
      <div
        className='w-[200px] bg-[#4D5B9E] h-[52px] rounded-2xl text-white text-center text-xl p-3 cursor-pointer'
        onClick={startQuiz}>
        Start quiz
      </div>
    </div>
  );
}
