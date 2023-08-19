import React, { useState } from 'react';
import Quiz from '../Components/Quiz';
import interviewTopicsQuiz from '../utils/questions';

  

const subjects = ['Data Structures and Algorithms', 'System Design','DBMS','OOPS']; 

const InterviewPrepPage = () => {
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <div className="container mx-auto p-4 h-full">
      {selectedSubject === null ? (
        <div>
          <h1 className="text-2xl font-bold mb-4">Choose a Subject</h1>
          <div className="grid grid-cols-2 gap-4">
            {subjects.map((subject, index) => (
              <button
                key={index}
                className="bg-blue-500 hover:bg-blue-600 text-white p-4 rounded"
                onClick={() => setSelectedSubject(subject)}
              >
                {subject}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold mb-4">Interview Preparation - {selectedSubject}</h1>
          {interviewTopicsQuiz.map((section, index) => (
            section.title === selectedSubject && (
              <div key={index}>
                <div className='flex gap-4 '>
                    <h2 className="text-xl font-bold mb-2">{section.title}</h2>
                   <button className='border border-2 p-2 bg-blue-500 rounded-lg text-white' onClick={()=>window.location.reload()}>Quit test</button>

                </div>
           
                <Quiz questions={section.questions} />
              </div>
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default InterviewPrepPage;
