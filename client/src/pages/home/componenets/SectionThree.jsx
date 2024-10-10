import React from "react";
import {Link} from 'react-router-dom'

const SectionThree = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col md:flex-row items-center max-w-4xl w-full mx-auto px-4">
        {/* Left section with images and messages */}
        <div className="flex flex-col items-center md:items-start space-y-6">
          {/* First user */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522125670776-3c7abb882bc2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image path
              alt="User 1"
              className="w-24 h-24 rounded-full object-cover"
            />

            <div className="bg-white shadow-md p-3 rounded-lg mt-2 text-black">
              Hello, I need some help
            </div>
          </div>

          {/* Second user */}
          <div className="relative">
            <img
              src="https://plus.unsplash.com/premium_photo-1721955487786-76802cbf0812?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual image path
              alt="User 2"
              className="w-24 h-24 rounded-full object-cover"
            />

            <div className="bg-white shadow-md p-3 rounded-lg mt-2 text-black">
              Hey, how can I help you?
            </div>
          </div>
        </div>

        {/* Right section with text */}
        <div className="text-center md:text-left mt-6 md:mt-0 md:ml-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Your friends come to your phone.
          </h1>
          <p className="text-gray-500 max-w-md">
            term chatting or chitchat refers in general to communication between
            two or more parties that can occur in person, in today's modern age,
            it can also occur over the internet via Short Message Service (SMS)
            text message and Multimedia Messaging Service
          </p>
        </div>
      </div>

      <div className="text-center max-w-md w-full mt-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Get better work done
        </h1>

        <p className="text-gray-500 mb-6">
          See why millions of people across 195 countries use Dash.
        </p>

        <div className="flex items-center justify-center space-x-2">
            <Link to='/auth'>
            <button className="bg-[#25d366] hover:bg-[#20b85c] text-white font-semibold py-3 px-6 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
            Try for free
          </button>
            </Link>
         
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
