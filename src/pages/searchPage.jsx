import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import dealers from "../components/dealersData";
import { Link } from 'react-router-dom';

const SearchResults = () => {
    const location = useLocation();
    const [filteredDealers, setFilteredDealers] = useState([]);

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const queryString = queryParams.get("query") || '';
        fetchSearchResults(queryString);
    }, [location.search]);

    const fetchSearchResults = (query) => {
        // Filter dealer data based on the query
        console.log(query)
        const dealerFilter = dealers.filter((data) => data.location === query);
        setFilteredDealers(dealerFilter);
        console.log(dealerFilter);
    };

    return (
        <div className="m-auto p-12">
            <h1 className="text-5xl font-bold text-center p-8 mb-5">Dealers</h1>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredDealers.length === 0 ? (
                    <p>No search results found.</p>
                ) : (
                    filteredDealers.map(dealer => (
                        <div key={dealer.index} className="w-72 bg-[#1164CA] shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl" id="bottles">
                            <Link to="/dealer-detail">
                                <img src={dealer.image} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                                <div className="px-4 py-3 w-72">
                                    <span className="text-white-400 mr-3 uppercase text-xs"> {dealer.category}</span>
                                    <p className="text-lg font-bold text-white truncate block capitalize">{dealer.name}</p>
                                </div>
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default SearchResults;
