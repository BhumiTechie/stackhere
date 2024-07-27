import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md border-t-4 border-orange-500">
      <div className="container mx-auto px-6 py-1">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-gray-800">
            <img
              className="w-20"
              src="https://pbs.twimg.com/profile_images/1220067947798024192/30eZhfxx_400x400.png"
              alt=""
              srcSet=""
            />
          </div>
          <div className="flex space-x-4 items-center">
            <NavLink
              to="/questions"
              exact
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'
              }
            >
              Abouts
            </NavLink>
            <NavLink
              to="/tags"
              exact
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/users"
              exact
              className={({ isActive }) =>
                isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'
              }
            >
              For Teams
            </NavLink>
            <div className="relative">
              <input
                type="text"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Search..."
              />
            </div>
            <NavLink
              to="/login"
              className=" hover:text-blue-600 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
