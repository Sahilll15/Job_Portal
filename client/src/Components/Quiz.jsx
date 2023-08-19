import React, { useState } from 'react';

const Quiz = ({ questions }) => {
  console.log("the  questions are ",questions)
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const currentQuestionData = questions;

  return (
    <div className='h-full'>
      {showScore ? (
        <div>
          <h3>Quiz Results</h3>
          <p>Your score: {score} / {questions.length}</p>
        </div>
      ) : (
        <div>
         
          { 
          currentQuestionData.map((data,index)=>{
            return(
              <div key={index} className='mt-10'>
                 <h3>Question {index + 1} / {currentQuestionData.length}</h3>
                <h3>{data.question}</h3>
                <div className="flex flex-col gap-2">
                  {data.options.map((option, index) => (
                    <button
                      key={index}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-1/2"
                      onClick={() => handleAnswerClick(option.isCorrect)}
                    >
                      {option.text}
                    </button>
                  ))}
                </div>
              </div>
            )
          })
            }
        </div>
      )}
    </div>
  );
};

export default Quiz;
