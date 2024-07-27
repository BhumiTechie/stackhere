import React from 'react';
import Leftside from './Leftside';
import Rightside from './Rightside';
import { useLocation } from 'react-router-dom';
import QuestionList from './QuestionList';

const Homemain = () => {
  const user = 1;
  const questionlist = null;
  const location = useLocation();
  return (
    
    <div className="flex  w-full">
       <Leftside/>
       <Rightside/>
      <div className="w-3/4">
        {location.pathname === '/' ? (
          <h1 className="text-2xl font-bold my-4">Top Questions</h1>
        ) : (
          <h1 className="text-2xl font-bold my-4">All Questions</h1>
        )}
        <button className="mb-4 px-4 py-2 bg-blue-600 text-white rounded">Ask Question</button>
    </div>
    <div>
      {questionlist === null ? (
        <h1>Loading....</h1>
      ):(
        <>
        <p>{questionlist.data.length}questions</p>
        <QuestionList questionlist={questionlist.data}/>
        </>
      )}
    </div>

    </div>
  );
};

export default Homemain;
