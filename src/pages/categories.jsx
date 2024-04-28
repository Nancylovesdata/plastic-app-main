import React, { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
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
import smallImage1 from '../assets2/i.png';
import smallImg2 from '../assets2/ii.png';
import smallImg3 from '../assets2/iii.png';

import smallImg4 from '../assets2/iv.png';
import smallImg5 from '../assets2/vi.png'
import smallImg6 from '../assets2/v.png'
import dealers from "../components/dealersData";

import plasticLogo6 from "../assets/plastic-logo6.png";
import { Navbar1 } from "../components/navbar1";

export const Categories = () => {
    const [category, setCategory] = useState("All");
    const [filtredData, setFiltredData] = useState([]);
    const location = useLocation();



    const fetchSearchResults = (query) => {
        // Filter dealer data based on the query
        console.log(query)
        const dealerFilter = dealers.filter((data) => data.location === query);
        setFiltredData(dealerFilter);
        console.log({ dealerFilter });
    };

    const handleChange = (data) => {
        setCategory(data);

        getfiltredData()
        console.log(data);
    }

    const getfiltredData = () => {
        const data = category == "All" ? dealers : dealers.filter((filtred) => filtred.category === category);
        setFiltredData(data);
    };

    useEffect(() => {
        // getfiltredData()
        console.log("heya")
        const queryParams = new URLSearchParams(location.search);
        const queryString = queryParams.get("query") || '';
        fetchSearchResults(queryString);
    }, [])

    return (
        <div className=" py-5">

            <Navbar1 />

            <div class="my-36 " >

                <div className="flex justify-center items-center gap-x-24 ">
                    <div className="flex flex-col items-center gap-y-3 " onClick={() => handleChange("All")}>
                        <div className="bg-primary/70 relative p-4 rounded-full" >
                            <img
                                src={smallImg3}
                                alt="Small Image 3"
                                className="w-16 h-16 object-cover rounded-lg"
                            />
                        </div>
                        <p className="font-bold">All</p>
                    </div>

                    <div className="flex flex-col items-center gap-y-3 " onClick={() => handleChange("Polythene Bag")}>
                        <div className="bg-primary/70 relative p-4 rounded-full" >
                            <img
                                src={smallImg2}
                                alt="Small Image 2"
                                className="w-16 h-16 object-cover rounded-lg "
                            />
                        </div>
                        <p className="font-bold">Polythene Bag</p>
                    </div>


                    <div className="flex flex-col items-center gap-y-3 " onClick={() => handleChange("Plastic Bottles")}>
                        <div className="bg-primary/70 relative p-4 rounded-full">
                            <img
                                src={smallImage1}
                                alt="Small Image 1"
                                className="w-16 h-16 object-cover rounded-lg"
                            />

                        </div>
                        <p className="font-bold">Plastic Bottle</p>
                    </div>




                    <div className="flex flex-col items-center gap-y-3 " onClick={() => handleChange("Sachet Water Waste")}>
                        <div className="bg-primary/70 relative p-4 rounded-full" >
                            <img
                                src={smallImg6}
                                alt="Small Image 3"
                                className="w-16 h-16 object-cover rounded-lg"
                            />
                        </div>
                        <p className="font-bold">Sachet Water Waste</p>
                    </div>


                    <div className="flex flex-col items-center gap-y-3 " onClick={() => handleChange("Polythene Bag")}>
                        <div className="bg-primary/70 relative p-4 rounded-full" >
                            <img
                                src={smallImg4}
                                alt="Small Image 3"
                                className="w-16 h-16 object-cover rounded-lg"
                            />
                        </div>
                        <p className="font-bold">Plastic Bags</p>
                    </div>

                    <div className="flex flex-col items-center gap-y-3 " onClick={() => handleChange("Plastic Bottles")}>
                        <div className="bg-primary/70 relative p-4 rounded-full">
                            <img
                                src={smallImg5}
                                alt="Small Image 3"
                                className="w-16 h-16 object-cover rounded-lg"
                            />
                        </div>
                        <p className="font-bold">Plastic Drinks</p>
                    </div>

                </div>
                <div className="w-full flex justify-center mt-16">
                    <h1 className="text-center font-bold text-3xl">{category}</h1></div>
            </div>

            {/* ✅ Grid Section - Starts Here 👇 */}
            <section id="Projects"
                class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 bg-red" >


                {filtredData.map((value) => {
                    return (
                        <>

                            <div class="w-72 bg-[#1164CA] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                                <Link to="/dealer-detail"> {/* Add this Link wrapper */}
                                    <img src={value.image}
                                        alt="Product" class="h-80 w-72 object-cover rounded-t-xl" />
                                    <div class="px-4 py-3 w-72">
                                        <span class="text-white-400 mr-3 uppercase text-xs"> {value.location} </span>
                                        <p class="text-lg font-bold text-white truncate block capitalize">{value.name}</p>

                                    </div>
                                </Link>
                            </div>
                        </>
                    )
                })}



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
