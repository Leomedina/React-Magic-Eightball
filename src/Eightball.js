import React, { useState } from 'react';
import DefaultAnswers from './defaultAnswers';

function randomNum(size) {
  return Math.floor(Math.random() * size)
}

function EightBall({ answers = DefaultAnswers }) {
  const [answer, setAnswer] = useState("Think of a question");

  return (
    <div className="Ball">
      <p>{answer}</p>
    </div>
  )
}

export default EightBall;