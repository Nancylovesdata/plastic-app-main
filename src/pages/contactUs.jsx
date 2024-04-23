import React, { useState } from "react";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export const ContactUs = () => {
  const [showPhoneNumber, setShowPhoneNumber] = useState(false);

  const handleContactClick = () => {
    setShowPhoneNumber(true);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center py-8">
        <div className="w-full md:w-1/2 lg:w-2/3 px-4">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7922.199622314128!2d-0.19066507814241327!3d5.6046669999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9c2f11f55b7b%3A0x7ef834dc1bd7e38d!2sAccra%2C%20Ghana!5e0!3m2!1sen!2sus!4v1671308746727!5m2!1sen!2sus"
            width="100%"
            height="400"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        {showPhoneNumber ? (
          <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img
              className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
              src="https://tailwindcss.com/img/erin-lindford.jpg"
              alt="Woman's Face"
            />
            <div className="text-center space-y-2 sm:text-left">
              <div className="space-y-0.5">
                <p className="text-lg text-[#023692] font-semibold">
                  Plastic dealer name
                </p>
                <p className="text-slate-500 font-medium">Location</p>
                <p className="text-slate-500 font-medium">
                  Phone Number: +123456789
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <img
              className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
              src="https://tailwindcss.com/img/erin-lindford.jpg"
              alt="Woman's Face"
            />
            <div className="text-center space-y-2 sm:text-left">
              <div className="space-y-0.5">
                <p className="text-lg text-[#023692] font-semibold">
                  Plastic dealer name
                </p>
                <p className="text-slate-500 font-medium">Location</p>
              </div>
              <button
                onClick={handleContactClick}
                className="px-4 py-1 text-sm text-[#023692] font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-[#023692] hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
