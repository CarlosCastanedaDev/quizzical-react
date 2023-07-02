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

  //   console.log(questions);
  //   console.log(questions.question);
  return (
    <div className='space-y-8 mt-8'>
      {questions.map((elem) => {
        return <Question key={nanoid()} question={elem.question} />;
      })}
    </div>
  );
}
