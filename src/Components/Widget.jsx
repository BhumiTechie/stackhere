import React from 'react';

const Widget = () => {
  return (
    <div className="flex flex-wrap bg-gray-100 p-8 rounded-lg shadow-md">
      <main className="flex-1 bg-white p-8 ml-4 rounded shadow-sm">
        <h1 className="text-2xl font-bold mb-6">Top Question</h1>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Loading...</h2>
        </div>

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
        <ul className="list-disc list-inside mb-6">
          <li>Why was this spam flag declined, yet the question marked as spam?</li>
          <li>What is the best course of action when a user has high enough rep to...</li>
          <li>Is a link to the "How to ask" help page a useful comment?</li>
        </ul>

        <h4 className="text-lg font-semibold mb-4">Watched Tags</h4>
        {/* Add watched tags content here */}
      </main>

      <aside className="w-full lg:w-1/4 bg-white p-4 ml-4 rounded shadow-sm mt-8 lg:mt-0">
        <h2 className="text-xl font-bold mb-4">The Overflow Blog</h2>
        <div className="mb-4 flex items-start">
          <img src="./pen.png" alt="Blog" className="w-4 h-4 mr-2" />
          <p>Observability is key to the future of software (and your DevOops career)</p>
        </div>
        <div className="mb-4 flex items-start">
          <img src="./pen.png" alt="Blog" className="w-4 h-4 mr-2" />
          <p>Podcast 374: How valuable is your screen name?</p>
        </div>
      </aside>
    </div>
  );
};

export default Widget;
