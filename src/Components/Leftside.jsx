import React from 'react';

const Leftside = () => {
  return (
    <nav className="w-1/5 bg-gray-100 p-4">
      <ul>
        <li className="mb-4">
          <a href="/">Home</a>
        </li>
        <li className="mb-4">
          <a href="/questions">Questions</a>
        </li>
        <li className="mb-4">
          <a href="/tags">Tags</a>
        </li>
        <li className="mb-4">
          <a href="/users">Users</a>
        </li>
      </ul>
    </nav>
  );
};

export default Leftside;
