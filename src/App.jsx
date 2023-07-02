import { useState } from 'react';
import './index.css';
import Home from './Home';
import Quiz from './Quiz';
import Question from './Question';

export default function App() {
  const [home, setHome] = useState(true);

  function startQuiz() {
    setHome(false);
  }

  return <>{home ? <Home startQuiz={startQuiz} /> : <Quiz />}</>;
}
