import React from 'react'
import { NavLink } from 'react-router-dom'

const Leftside = () => {
  return (
    <div className='ml-20 flex flex-col items-start'>
      <div className='flex flex-col space-y-4'>
        <NavLink
          to="/home"
          exact
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'
          }
        >Home</NavLink>
        <NavLink
          to="/questions"
          exact
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'
          }
        >Questions</NavLink>
        <NavLink
          to="/public"
          exact
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'
          }
        >PUBLIC</NavLink>
         <NavLink
          to="/public"
          exact
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'
          }
        >Tags</NavLink>
         <NavLink
          to="/public"
          exact
          className={({ isActive }) =>
            isActive ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'
          }
        >Users</NavLink>
      </div>
      <div className='border-l-4 border-gray-300 h-full absolute left-40 top-0 mt-24 ml-8'></div>
    </div>
  )
}

export default Leftside
