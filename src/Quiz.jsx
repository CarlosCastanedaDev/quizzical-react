import React, { useEffect, useState } from 'react';
import Question from './Question';
import { nanoid } from 'nanoid';
import { decode } from 'html-entities';

export default function Quiz() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch(
      'https://opentdb.com/api.php?amount=5&category=21&difficulty=medium&type=multiple'
    )
      .then((res) => res.json())
      .then((data) => setQuestions(data.results));
  }, []);

  console.log(questions);
  //   console.log(questions.question);
  return (
    <div className='flex flex-col justify-center items-center space-y-8 mt-8 h-screen mb-10'>
      {questions.map((elem) => {
        return (
          <Question
            key={nanoid()}
            question={elem.question}
            incorrectAnswers={elem.incorrect_answers}
            correctAnswer={elem.correct_answer}
          />
        );
      })}
      <div className='flex justify-center border rounded-2xl w-[180px] h-[60px] bg-[#4D5B9E] text-white p-4'>
        <p>Check answers</p>
      </div>
    </div>
  );
}
