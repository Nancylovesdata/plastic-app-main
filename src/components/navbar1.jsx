import React from 'react';
import plasticLogo6 from "../assets/plastic-logo6.png";
import { Link } from 'react-router-dom';



export const Navbar1 = () => {
  return (
    <div>
      <div class="flex p-2 justify-between items-center border-b border-gray-300 flex-wrap">
        <div class="flex items-center">
          <Link to='/'><img src={plasticLogo6} class="w-35 h-16" /></Link>
         
        </div>
        <div class="relative flex items-center hidden md:inline-flex">
          <input type="text" placeholder="Search" class="border border-gray-200 rounded-md py-1 px-2" />
          <svg class="absolute right-2 h-6 w-6 text-gray-400 hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <div class="flex items-center gap-2">


          <div className="relative group">
            <div className="h-10 w-10 overflow-hidden rounded-full cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                className="h-full w-full p-2 text-white bg-primary stroke-current">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <div className="hidden group-hover:block absolute right-0 top-10 bg-white shadow-md rounded">
              <ul>
                <li><a href="#" className="block px-4 py-2 bg-gray-300">Settings</a></li>
                <li><a href="./" className="block px-4 py-2">Logout</a></li>
              </ul>
            </div>
          </div>


          <Link to="/dashboard">
            <button class="border px-2 py-1 rounded-md text-prime">My Profile</button>
          
          </Link>
        </div>
      </div>

    </div>
  )
}
