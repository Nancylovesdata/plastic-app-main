import React, { useState } from 'react';
import collectorsImage from '../assets/collectors-image.jpg';
import { useNavigate, useLocation } from "react-router-dom";


const colors = {
    primary: "#060606",
    background: "#f5f5f5",
    disabled: "#D9D9D9",
};

export const Register = () => {
    const [registerUser, SetregisterUser] = useState({
        firstName: "",
        lastName: "",
        UserName: "",
        Email: "",
        Password: ""


    });


    const [registerDealer, SetregisterDealer] = useState({
        firstName: "",
        lastName: "",
        UserName: "",
        Email: "",
        Password: "",
        PhoneNumber: "",
        Location: "",
        image: ""

    });


    const navigate = useNavigate();
    const location = useLocation()
    console.log(location)

    const [selectedRole, setSelectedRole] = useState("dealer");
    const [dealerData, setdealerData] = useState("");

    const handleSelectRole = (event) => {
        setSelectedRole(event.target.value);

    };




    const handleFormChange = (event) => {
        const { name, value } = event.target
        SetregisterDealer((prevDealerData) => ({ ...prevDealerData, [name]: value }));

    };

    const handleSubmit = async () => {
        navigate('/login', { state: { searchTerm: location.state.searchTerm } })
        if (selectedRole == "dealer") {
            const dealerForm = {
                firstName: registerDealer.firstName,
                lastName: registerDealer.lastName,
                userName: registerDealer.UserName,
                email: registerDealer.Email,
                password: registerDealer.Password,
                phoneNumber: registerDealer.PhoneNumber,
                location: registerDealer.Location,
                image: registerDealer.image
            }
            try {
                const response = await fetch('http://localhost:4000/api/dealer/signup', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(dealerForm)
                });
                const data = await response.json();
                // Handle successful response
                if (data.status === 201) {
                    console.log(
                        "Data saved successfully")
                }
            } catch (error) {

                console.error('Error:', error);
                // Handle error
            }


        }

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
                                onChange={handleSelectRole}
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
                            name="firstName"
                            onChange={handleFormChange}
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                        />
                        <input
                            type="text"
                            placeholder="Last name"
                            name="lastName"
                            onChange={handleFormChange}
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                        />
                        <input
                            type="text"
                            placeholder="Username"
                            name="Username"
                            onChange={handleFormChange}
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                        />
                        <input
                            type="text"
                            placeholder="Email"
                            name="Email"
                            onChange={handleFormChange}
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                        />
                        <input


                            type="password"
                            placeholder="Password"
                            name="Password"
                            onChange={handleFormChange}
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            onChange={handleFormChange}
                            className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                        />
                         <input
                                    type="text"
                                    placeholder="Location"
                                    name="Location"
                                    onChange={handleFormChange}
                                    className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                                />

                        {/* Additional input fields for Plastic Dealer */}
                        {selectedRole === "dealer" && (
                            <>
                               
                                <div className="w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none">
                                    <label htmlFor="upload" className="text-gray-600 font-medium cursor-pointer">
                                        Upload image
                                        <input id="upload" type="file" className="hidden" />
                                    </label>
                                </div>
                                <input
                                    type="tel"
                                    placeholder="Phone number"
                                    name="PhoneNumber"
                                    onChange={handleFormChange}
                                    className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
                                />
                            </>
                        )}

                        {/* Additional input fields for User */}
                        {selectedRole === "user" && (
                            <>
                                {/* No additional input fields for User */}
                            </>
                        )}

                        <div className='w-full flex flex-col items-center justify-between'>
                            <div className='w-full flex flex-col my-4'>
                                <button className='w-full text-white my-2 font-semibold bg-[#060606] rounded-md p-4 text-center flex items-center justify-center cursor-pointer' onClick={() => handleSubmit()}>
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
