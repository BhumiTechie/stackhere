import React from 'react';
import Leftside from './Leftside';
import Rightside from './Rightside';
import { useLocation } from 'react-router-dom';
import QuestionList from './QuestionList';
import Widgettag from './Widgettag';

const Homemain = () => {
  const user = 1;
  const questionlist = [
    { title: "How to use React hooks?", body: "I'm trying to use useEffect and useState in my React component...", user: "JohnDoe" },
    { title: "What is the difference between let and var in JavaScript?", body: "I keep seeing let and var being used interchangeably...", user: "JaneSmith" }
  ];
  const location = useLocation();

  return (
    <div className="flex">
      <Leftside />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold my-4">
          {location.pathname === '/' ? 'Top Questions' : 'All Questions'}
        </h1>
        <div className="flex justify-end mb-4">
          <button className="px-2 py-2 bg-blue-600 text-white rounded">Ask Question</button>
        </div>
        {questionlist === null ? (
          <h1>Loading...</h1>
        ) : (
          <>
            <p>{questionlist.length} questions</p>
            <QuestionList questionlist={questionlist} />
          </>
        )}
       
        <div className="mb-6">
          <h4 className="text-lg font-semibold mb-4">Featured on Meta</h4>
          <div className="mb-6 flex items-center">
            <img src="./comment.png" alt="Comment" className="w-6 h-6 mr-2" />
            <p>Review queue workflows - Final release....</p>
          </div>
          <div className="mb-6 flex items-center">
            <img src="./comment.png" alt="Comment" className="w-6 h-6 mr-2" />
            <p>Please Welcome Valued Associates: #958 - V2B, #959 - V2Blast, #959 - SpencerG</p>
          </div>
          <div className="mb-6 flex items-center">
            <img src="./thumb.png" alt="Thumb" className="w-6 h-6 mr-2" />
            <p>Outdated Answers: accepted answer is now unpinned on Stack Overflow</p>
          </div>
        </div>

        <h4 className="text-lg font-semibold mb-4">Hot Meta Posts</h4>
        <ul className="list-disc list-inside">
          <li>Why was this spam flag declined, yet the question marked as spam?</li>
          <li>What is the best course of action when a user has high enough rep to...</li>
          <li>Is a link to the "How to ask" help page a useful comment?</li>
        </ul>

        <h4 className="text-lg font-semibold mb-4">Watched Tags</h4>
      {<Widgettag/>}
    
      </div>
      <Rightside />
    </div>
  );
};

export default Homemain;
