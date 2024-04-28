import React, { useState } from "react";
import { useNavigate } from "react-router";
import Plasticdealer from '../assets/plastic-dealer.jpeg';

export const Header = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/login', {state:{searchTerm}});
  };

  return (
    <div>
      <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Plasticdealer})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover", height: "85vh" }} className="py-48 px-1 md:px-8 text-center flex items-center flex-col relative   " >
        <h1 className="pb-4 text-6xl w-1/2  text-white font-bold ">Find <span className="text-prime">Plastic dealers</span> in Ghana Near You</h1>
        <div className="flex flex-1 items-center justify-center p-6">
          <div className="w-full max-w-lg">
            <form onSubmit={handleSubmit} className="mt-5 flex items-center ">
              <input id="q" name="q" className="p-3 rounded-l-lg text-black opacity-100" placeholder="Enter your location here" type="search" value={searchTerm} onChange={handleChange} />
              <button type="submit" className="bg-primary p-3 rounded-r-lg text-white">Search</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
