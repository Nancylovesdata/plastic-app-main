import React, { useState } from 'react';
import collectorsImage from '../assets/collectors-image.jpg';
import { useNavigate } from "react-router";

const colors = {
    primary: "#060606",
    background: "#f5f5f5",
    disabled: "#D9D9D9",
};

export const Register = () => {
    const navigate = useNavigate();
    const [selectedRole, setSelectedRole] = useState("");

    const handleRoleChange = (event) => {
        setSelectedRole(event.target.value);
    };

    return (
        <>
            <div className='w-full h-screen flex items-start'>
                <div className='relative w-1/2 h-full flex flex-col' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${collectorsImage})`, backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}>
                    <div className='absolute top-[25%] left-[10%] flex flex-col'>
                        <h1 className='text-4xl text-white font-bold my-4 '>Make your plastics reusable</h1>
                        <p className='text-xl text-white font-normal'>Gather all your plastics and give them to any of our plastic dealers here</p>
                    </div>
                </div>

                <div className='w-1/2 h-full bg-[#f5f5f5] flex flex-col p-20 justify-between'>
                    <div className='w-full flex flex-col max-w-[500px]'>
                        <div className="w-full">
                            <h3 className="text-black mb-2 text-xl">Register </h3>
                            <select
                                className="w-full text-grey border-2 rounded-lg p-4 pl-2 pr-2 text-black dark:border-gray-600 dark:bg-gray-800"
                                value={selectedRole}
                                onChange={handleRoleChange}
                            >
                                <option disabled value="">Register As</option>
                                <option value="dealer">Plastic Dealer</option>
                                <option value="user">User</option>
                            </select>
                        </div>

                        {/* Common input fields */}
                        <input
                            type="text"
                            placeholder="First name"
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                        />
                        <input
                            type="text"
                            placeholder="Last name"
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                        />
                        {/* Add other common input fields here */}

                        {/* Additional input fields for Plastic Dealer */}
                        {selectedRole === "dealer" && (
                            <>

                                {/* Add other input fields specific to Plastic Dealer here */}

                                <div className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none">
                                    <label htmlFor="upload" className="text-gray-600 font-medium cursor-pointer">
                                        Upload file
                                        <input id="upload" type="file" className="hidden" />
                                    </label>
                                </div>


                                {/* <input
                                    id="upload"
                                    type="file"

                                    className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none"
                                /> */}
                            </>
                        )}

                        <input
                            type="text"
                            placeholder="Email"
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                        />
                        {/* Add other common input fields here */}

                        {/* Additional input fields for User */}
                        {selectedRole === "user" && (
                            <>
                                <input
                                    type="text"
                                    placeholder="Location"
                                    className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                                />
                                {/* Add other input fields specific to User here */}
                            </>
                        )}

                        <input
                            type="password"
                            placeholder="Password"
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                        />
                        <input
                            type="tel"
                            placeholder="Phone number"
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                        />

                        <div className='w-full flex flex-col items-center justify-between'>
                            <div className='w-full flex flex-col my-4'>
                                <button className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer'>
                                    Register
                                </button>
                            </div>
                        </div>

                        <div className='w-full flex items-center justify-center'>
                            <p className='text-sm font-normal text-[#060606]'>
                                Already have an account? <span className='font-semibold underline underline-offset-2 cursor-pointer' onClick={() => navigate("/login")}>Login</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
