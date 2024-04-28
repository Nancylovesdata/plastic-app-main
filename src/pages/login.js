import React, { useEffect } from 'react';
import registerPic from '../assets/register-pic.jpg';
import trueGoogle from '../assets/trueGoogle.png';
import useLocalStorage from 'use-local-storage';
import { useLocation, useNavigate } from 'react-router-dom';

const colors = {
  primary: "#060606",
  background: "#f5f5f5",
  disabled: "#D9D9D9",
};

export const Login = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false);

  const location = useLocation()

  const handleLogin =async () => {
     await setIsLoggedIn(!isLoggedIn)
    navigate(`/categories?query=${location.state.searchTerm}`);

  }

  useEffect(() => {

    if (isLoggedIn)
      navigate(`/categories?query=${location.state.searchTerm}`);
  }, [])
  return (
    <>
      {/* <Navbar/> */}
      <div className='w-full h-screen flex items-start'>
        <div className='relative w-1/2 h-full flex flex-col' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${registerPic})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
          <div className='absolute top-[25%] left-[10%] flex flex-col'>
            <h1 className='text-4xl text-white font-bold my-4'>Make your plastics reusable</h1>
            <p className='text-xl text-white font-normal'>Gather all your plastics and give them to any of our plastic dealers here</p>
          </div>
        </div>
        <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between'>
          {/* <img src={ plasticLogo6} alt="logo" className="w-35  h-16" /> */}
          <div className='w-full flex flex-col max-w-[500px]'>
            <div className='w-full flex flex-col mb-2'>
              <h3 className='text-3xl font-semibold mb-2'>Login</h3>
              <p className='text-base mb-2'>Welcome back! Please enter your details if you have an account already.</p>
            </div>

            <div className='w-full flex flex-col'>
              <input
                type="text"
                placeholder="Email or Username"
                className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
              />
              <input
                type="password"
                placeholder="Password"
                className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
              />
            </div>

            <div className='w-full flex flex-col items-center justify-between'>
              <div className='w-full flex items-center'>
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <p className='text-sm'>Remember Me for 30 days</p>
                <p className='text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2'>Forgot password</p>
              </div>

              <div className='w-full flex flex-col my-4'>
                <button className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer' onClick={handleLogin}>
                  Log in
                </button>
                <button className='w-full text-[#060606] my-2 font-semibold bg-white rounded-md border border-black p-4 text-center flex items-center justify-center cursor-pointer' onClick={() => navigate("/register", {state:{searchTerm:location.state.searchTerm}})}>
                  Register
                </button>
              </div>

              <div className='w-full flex items-center justify-center relative py-2'>
                <div className='w-full h-[10px] bg-black/40'></div>
                <p className='text-lg absolute text-black/80 bg-[#f5f5f5]'>Or</p>
              </div>

              <div className='w-full text-[#060606] my-2 font-semibold bg-white rounded-md border border-black/40 p-4 text-center flex items-center justify-center cursor-pointer'>
                <img src={trueGoogle} className='h-6 mr-2' alt='Google Logo' />
                Sign in with Google
              </div>
            </div>
            <div className='w-full flex items-center justify-center'>
              <p className='text-sm font-normal text-[#060606]'>
                Don't have an account? <span className='font-semibold underline underline-offset-2 cursor-pointer' onClick={() => navigate("/register")}>Register</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
