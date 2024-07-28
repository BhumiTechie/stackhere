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
    
    <div className="flex ">
       <Leftside/>
       <Rightside/>
      <div className="w-full">
        {location.pathname === '/' ? (
          <h1 className="text-2xl font-bold my-4">Top Questions</h1>
        ) : (
          <h1 className="text-2xl font-bold my-4">All Questions</h1>
        )}
  <div className="w-full flex">
  <button className="px-4 py-2 bg-blue-600 text-white rounded mx-auto">Ask Question</button>
</div>


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
