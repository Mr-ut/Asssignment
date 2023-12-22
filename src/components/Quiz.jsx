import React, { useState } from 'react';
import "./quiz.scss";
import ProgressBar from './ProgressBar';
import Option from './Option';
import { QuizData } from './QuizData';

const Quiz = () => {
  const totalQuestions = QuizData.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [resetProgress, setResetProgress] = useState(false);

  const handleOptionClick = (optionIndex) => {
    setSelectedOption(optionIndex);

    // Move to the next question
    if (currentQuestion < totalQuestions - 1)
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
  };

  const handlePrevButtonClick = () => {
    // Move to the previous question
    if (currentQuestion > 0)
      setCurrentQuestion((prevQuestion) => prevQuestion - 1);
  };

  return (
    <div className='Container'>
      <div className="card">
        <div className="progress-bar">
          <ProgressBar current={currentQuestion} totalQuestions={totalQuestions} resetProgress={resetProgress} />
          <span> STRATEGY</span>
        </div>
        <div className="question-number">{currentQuestion + 1}/{totalQuestions}</div>
        <div className="question-txt">
          <span>{QuizData[currentQuestion].question}</span>
        </div>
        <div className="options">
          <Option
            options={['Strongly Disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly Agree']}
            selectedOption={selectedOption}
            onClick={handleOptionClick}
          />
        </div>
        <div className="navigation-buttons">
          <span class="material-symbols-outlined">arrow_back</span>
          <button onClick={handlePrevButtonClick}>Prev</button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
