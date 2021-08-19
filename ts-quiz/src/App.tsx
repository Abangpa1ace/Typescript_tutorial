import React from 'react';
import QuesCard from './components/QuesCard';

function App() {
  const getQuiz = async () => {

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

  }

  const nextQuestion = () => {

  }

  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={getQuiz}>Start</button>
      <p className="score">Score: </p>
      <p className="loader">
        Loading Questions...
      </p>
      <QuesCard />
      <button className="next" onClick={nextQuestion}>Next Question</button>
    </div>

  );
}

export default App;
