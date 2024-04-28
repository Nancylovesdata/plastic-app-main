import React from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";
import plasticLogo6 from "../assets/plastic-logo6.png";

export const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#06132b] text-white py-10 mt-48 ">
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center mb-4 sm:mb-0">
<p>Plastic Buddy is a company <br />that brings all plastic dealers in Ghana <br />to your door step</p>

          {/* <img src={plasticLogo6} alt="Logo" className="w-35 h-12 mr-2" /> */}
          {/* <span className="text-xl font-semibold">Recycle</span> */}
        </div>
        <div className="flex  justify-between gap-10 ">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold mb-2">Explore</h3>
            <ul className="flex flex-col gap-1">
              <li className="cursor-pointer" onClick={() => navigate("/faqs")}>
                FAQs
              </li>
              <li
                className="cursor-pointer"
                onClick={() => navigate("/register")}
              >
                Sign up
              </li>
              <li className="cursor-pointer" onClick={() => navigate("/login")}>
                Sign in
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold mb-2">Company</h3>
            <ul className="flex flex-col gap-1">
              <li>About us</li>
              {/* <li
                className="cursor-pointer"
                onClick={() => navigate("/contact-us")}
              >
                Contact
              </li> */}
              <li>Privacy Policy</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg font-semibold mb-2">Resources</h3>
            <ul className="flex flex-col gap-1">
              <li>Blogs</li>
              <li>Guides</li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Connect</h3>
          <h1>Email: admin@plasticbuddy.com</h1>
          <div className="flex space-x-4">
            <a href="#" className="text-white hover:text-gray-400">
            <i class="fa-brands fa-linkedin"></i>
            
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-white hover:text-gray-400">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
