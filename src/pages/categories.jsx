import React from "react";
import { Link } from 'react-router-dom';
import { Navbar } from "../components/navbar";
import boxes from "../assets/boxes.png";
import Dustbin from "../assets/dustbin.png";
import { Footer } from "../components/footer";
import Fifteen from '../assets2/fifteen.jpg';
import Bottles from '../assets2/bottles.jpeg';
import Fourteen from '../assets2/fourteen.jpg';
import Four from '../assets2/four.jpg';
import PureWater from '../assets2/pure-water.jpeg';
import Six from '../assets2/six.jpg';
import pureWater2 from '../assets2/pure-water2.jpeg';
import Eight from '../assets2/two.jpg';
import Nine from '../assets2/polythene3.jpeg';
import Ten from '../assets2/ten.jpg';
import Eleven from '../assets2/banku-rubber.jpeg';
import Twelve from '../assets2/twelve.jpg';
import smallImage1 from  '../assets2/i.png';
import smallImg2 from  '../assets2/ii.png';
import smallImg3 from  '../assets2/iii.png';

import smallImg4 from  '../assets2/iv.png';
import smallImg5 from  '../assets2/vi.png'
import smallImg6 from  '../assets2/v.png'


import plasticLogo6 from "../assets/plastic-logo6.png";

export const Categories = () => {
  return (
    <div>
      <Navbar />
      
      <div class="py-12 sm:py-24 " >
    <div class="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div class="mb-8 flex justify-center">
            <p
                class="relative rounded-full px-4 py-1.5 text-xl leading-6 text-white ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20  ">
               
                {/* <a href="#" target="_blank" class="font-semibold text-white">
                    <span class="absolute inset-0" ></span> Read
                    the update <span>→</span>
                </a> */}
            </p>
        </div>
       

        <div className="flex justify-center items-center space-x-4 ">
      <a href="#bottles">    
      <img
        src={smallImage1}
        alt="Small Image 1"
        className="w-20 h-20 object-cover rounded-lg"
      />
      </a> 
      <a href="#polythene">  
      <img
        src={smallImg2 }
        alt="Small Image 2"
        className="w-20 h-20 object-cover rounded-lg"
      />
      
      </a> 
      <img
        src={smallImg3 }
        alt="Small Image 3"
        className="w-20 h-20 object-cover rounded-lg"
      />
      

<img
        src={smallImg4 }
        alt="Small Image 3"
        className="w-20 h-20 object-cover rounded-lg"
      />

<img
        src={smallImg5 }
        alt="Small Image 3"
        className="w-20 h-20 object-cover rounded-lg"
      />

<a href="#pure-water">
<img
        src={smallImg6 }
        alt="Small Image 3"
        className="w-20 h-20 object-cover rounded-lg"
      />
      </a>
    </div>


    </div>
</div>
      
      {/* source: https://github.com/mfg888/Responsive-Tailwind-CSS-Grid/blob/main/index.html  */}
      <div className="text-center p-10">
  <h1 className="font-bold text-4xl mb-4 text-primary">View All Your Plastic Dealers Here</h1>
  <div className="flex flex-col items-center">
    <img src={plasticLogo6} alt="logo" className="w-35 h-16" />
  </div>
</div>




 {/* ✅ Grid Section - Starts Here 👇 */}
<section id="Projects"
    class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5" >

       {/* ✅ Product card 1 - Starts Here 👇  */}
       <div className="w-72 bg-[#1164CA] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" id="bottles">
        <Link to="/dealer-detail"> {/* Add this Link wrapper */}
            <img src={Fifteen} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
            <div className="px-4 py-3 w-72">
                <span className="text-white-400 mr-3 uppercase text-xs">BRAND: PLASTIC BOTTLE </span>
                <p className="text-lg font-bold text-white truncate block capitalize">Dealer's Name</p>
            </div>
        </Link>
    </div>
    {/* 🛑 Product card 1 - Ends Here   */}

   {/* ✅ Product card 2 - Starts Here 👇 */}
    <div class="w-72 bg-[#1164CA] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <Link to="/dealer-detail"> {/* Add this Link wrapper */}
            <img src={Bottles}
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <span class="text-white-400 mr-3 uppercase text-xs">BRAND: PLASTIC BOTTLE </span>
                <p class="text-lg font-bold text-white truncate block capitalize">Dealer's Name</p>
                {/* <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                </div> */}
            </div>
        </Link>
    </div>
 

     {/* ✅ Product card 3 - Starts Here 👇  */}
    <div class="w-72 bg-[#1164CA] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <Link to="/dealer-detail"> {/* Add this Link wrapper */}
            <img src={Fourteen}
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <span class="text-white-400 mr-3 uppercase text-xs">BRAND: PLASTIC BOTTLE </span>
                <p class="text-lg font-bold text-white truncate block capitalize">Dealer's Name</p>
                {/* <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                </div> */}
            </div>
        </Link>
    </div>


     {/* ✅ Product card 4 - Starts Here 👇  */}
    <div class="w-72 bg-[#1164CA] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <Link to="/dealer-detail"> {/* Add this Link wrapper */}
            <img src={Four}
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <span class="text-white-400 mr-3 uppercase text-xs">BRAND: PLASTIC BOTTLE </span>
                <p class="text-lg font-bold text-white truncate block capitalize">Dealer's Name</p>
                {/* <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                </div> */}
            </div>
        </Link>
    </div>


     {/* ✅ Product card 5 - Starts Here 👇  */}
    <div class="w-72 bg-[#1164CA] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" id="#pure-water">
    <Link to="/dealer-detail"> {/* Add this Link wrapper */}
            <img src={PureWater}
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <span class="text-white-400 mr-3 uppercase text-xs">BRAND: WATER SACHET WASTE</span>
                <p class="text-lg font-bold text-white truncate block capitalize">Dealer's Name</p>
                {/* <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                </div> */}
            </div>
        </Link>
    </div>
  

    {/* ✅ Product card 6 - Starts Here 👇  */}
    <div class="w-72 bg-[#1164CA] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <Link to="/dealer-detail"> {/* Add this Link wrapper */}
            <img src={Six}
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <span class="text-white-400 mr-3 uppercase text-xs">BRAND: WATER SACHET WASTE</span>
                <p class="text-lg font-bold text-white truncate block capitalize">Dealer's Name</p>
                {/* <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                </div> */}
            </div>
        </Link>
    </div>

    <div class="w-72 bg-[#1164CA] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <Link to="/dealer-detail"> {/* Add this Link wrapper */}
            <img src={pureWater2}
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
          <div class="px-4 py-3 w-72">
                <span class="text-white-400 mr-3 uppercase text-xs">BRAND: WATER SACHET WASTE</span>
                <p class="text-lg font-bold text-white truncate block capitalize">Dealer's Name</p>
                {/* <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                </div> */}
            </div>
        </Link>
    </div>

    <div class="w-72 bg-[#1164CA] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl"id="#polythene">
    <Link to="/dealer-detail"> {/* Add this Link wrapper */}
            <img src={Eight}
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <span class="text-white-400 mr-3 uppercase text-xs">BRAND: WATER SACHET WASTE</span>
                <p class="text-lg font-bold text-white truncate block capitalize">Dealer's Name</p>
                {/* <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                </div> */}
            </div>
        </Link>
    </div>

    <div class="w-72 bg-[#1164CA] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <Link to="/dealer-detail"> {/* Add this Link wrapper */}
            <img src={Nine}
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <span class="text-white-400 mr-3 uppercase text-xs">BRAND: WATER SACHET WASTE</span>
                <p class="text-lg font-bold text-white truncate block capitalize">Dealer's Name</p>
                {/* <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                </div> */}
            </div>
        </Link>
    </div>

    <div class="w-72 bg-[#1164CA] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <Link to="/dealer-detail"> {/* Add this Link wrapper */}
            <img src={Ten}
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
           <div class="px-4 py-3 w-72">
                <span class="text-white-400 mr-3 uppercase text-xs">BRAND: POLYTHENE BAGS</span>
                <p class="text-lg font-bold text-white truncate block capitalize">Dealer's Name</p>
                {/* <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                </div> */}
            </div>
        </Link>
    </div>

    <div class="w-72 bg-[#1164CA] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <Link to="/dealer-detail"> {/* Add this Link wrapper */}
            <img src={Eleven}
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <span class="text-white-400 mr-3 uppercase text-xs">BRAND: POLYTHENE BAGS</span>
                <p class="text-lg font-bold text-white truncate block capitalize">Dealer's Name</p>
                {/* <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                </div> */}
            </div>
        </Link>
    </div>

    <div class="w-72 bg-[#1164CA] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <Link to="/dealer-detail"> {/* Add this Link wrapper */}
            <img src={Twelve}
                    alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
            <div class="px-4 py-3 w-72">
                <span class="text-white-400 mr-3 uppercase text-xs">BRAND: POLYTHENE BAGS</span>
                <p class="text-lg font-bold text-white truncate block capitalize">Dealer's Name</p>
                {/* <div class="flex items-center">
                    <p class="text-lg font-semibold text-black cursor-auto my-3">$149</p>
                    <del>
                        <p class="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                    </del>
                    <div class="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                            fill="currentColor" class="bi bi-bag-plus" viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                            <path
                                d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                        </svg></div>
                </div> */}
            </div>
        </Link>
    </div>




</section>

 {/* 🛑 Grid Section - Ends Here */}


 {/* credit  */}
{/* <div class="text-center py-10 px-10">
    <h2 class="font-bold text-2xl md:text-4xl mb-4">Thanks to <a href="https://unsplash.com/@nixcreative"
            class="underline font-black">Tyler Nix</a> for those AMAZING product images!</h2>
</div> */}


 {/* Support Me 🙏🥰  */}
{/* <script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"></script>
<script>
    kofiWidgetOverlay.draw('mohamedghulam', {
            'type': 'floating-chat',
            'floating-chat.donateButton.text': 'Support me',
            'floating-chat.donateButton.background-color': '#323842',
            'floating-chat.donateButton.text-color': '#fff'
        });
</script> */}

      <Footer />
    </div>
  );
};
