import React, { useState } from 'react';
import DefaultAnswers from './defaultAnswers';

function randomNum(size) {
  return Math.floor(Math.random() * size)
}


const EightBall = ({ answers = DefaultAnswers }) => {
  const [answer, setAnswer] = useState("Think of a question");
  const [state, setState] = useState("black");
  return (
    <div className="Ball" style={{ backgroundColor: state }} onClick={() => {
      const newIndex = answers[randomNum(answers.length)]
      setAnswer(newIndex.msg);
      setState(newIndex.color);
    }}>
      <p>{answer}</p>
    </div >
  )
}

export default EightBall;