import React from 'react';

const QuestionList = ({ questionlist }) => {
  return (
    <div>
      {questionlist.map((question, index) => (
        <div key={index} className="mb-4 p-4 border rounded shadow-sm">
          <h2 className="text-xl font-bold">{question.title}</h2>
          <p>{question.body}</p>
          <p className="text-sm text-gray-500">Asked by: {question.user}</p>
        </div>
      ))}
    </div>
  );
};

export default QuestionList;
