import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Login } from "../pages/login";
import plasticLogo6 from "../assets/plastic-logo6.png";
export const Navbar = () => {
  return (
    <>
      <nav class="flex items-center justify-between bg-white fixed top-0 z-50 w-full px-4 ">
        <div class="flex items-center">
          <NavLink to="/" className="flex items-center space-x-2">
            <img src={plasticLogo6} alt="logo" className="w-44  " />
          </NavLink>
        </div>
        <div class="flex items-center space-x-4 ml-auto text-xl">

          <div class="flex gap-3 max-w-sm">
            <Link to="/login" ><button class="py-[4px] px-[16px] rounded-full text-md font-medium border-2 bg-white text-[#023692] border-primary">Login</button></Link>
          </div>
          <span class="text-white-400">|</span>
          <div class="flex gap-3 max-w-sm">
            <Link to="/register"> <button class="py-[4px] px-[16px] rounded-full text-md font-medium border-2 bg-primary text-white border-primary">Register</button></Link>

          </div>


          {/* 
          <NavLink to="/login" className="text-[#023692] hover:text-gray-900 ">
            Login
          </NavLink>
          <span class="text-white-400">|</span>
          <NavLink
            to="/register"
            className="text-[#023692]  hover:text-gray-900  pr-16"
          >
            Register
          </NavLink> */}
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
