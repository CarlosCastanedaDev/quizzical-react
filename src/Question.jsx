import React, { useEffect, useState } from 'react';
import { decode } from 'html-entities';
import { nanoid } from 'nanoid';

export default function Question({
  question,
  incorrectAnswers,
  correctAnswer,
}) {
  let newArr = [];
  incorrectAnswers.map((e) => newArr.push(e));
  newArr.push(correctAnswer);

  console.log(newArr);
  console.log(incorrectAnswers);
  return (
    <div className=' flex flex-col text-[#293264] text-xl px-20 space-y-6 font-karla'>
      <p className='font-bold'>{decode(question)}</p>
      <div className='flex space-x-4'>
        {newArr.sort().map((elem) => {
          return (
            <p
              key={nanoid()}
              className='border border-[#4D5B9E] rounded-xl p-2 text-sm grow text-center hover:bg-[#D6DBF5] hover:duration-200'>
              {decode(elem)}
            </p>
          );
        })}
      </div>
      <div className='border-solid border-[#4D5B9E] border opacity-10 w-full'></div>
    </div>
  );
}
