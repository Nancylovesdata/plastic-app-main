import React from "react";
import { NavLink } from "react-router-dom";
import { Login } from "../pages/login";
import plasticLogo2 from "../assets/plastic-logo6.png";
export const Navbar = () => {
  return (
    <>
      <nav class="flex items-center justify-between bg-gray-200 p-4">
        <div class="flex items-center">
          <NavLink to="/" className="flex items-center space-x-2">
            <img src={ plasticLogo2} alt="logo" className="w-35  h-12" />
          </NavLink>
        </div>
        <div class="flex items-center space-x-4 ml-auto">
          <NavLink to="/login" className="text-gray-700 hover:text-gray-900">
            Login
          </NavLink>
          <span class="text-gray-400">|</span>
          <NavLink
            to="/register"
            className="text-gray-700 hover:text-gray-900 "
          >
            Register
          </NavLink>
{/* 
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-8">
            <NavLink to="/dealers">Get Dealers</NavLink>
          </button> */}
        </div>
        {/* 
<NavLink to = '/dealers' > Get Dealers</NavLink> */}
      </nav>
    </>
  );
};
