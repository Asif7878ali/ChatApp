import React from 'react'

const SectionThree = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-50">
    <div className="flex flex-col md:flex-row items-center max-w-4xl w-full mx-auto px-4">
      {/* Left section with images and messages */}
      <div className="flex flex-col items-center md:items-start space-y-6">
        {/* First user */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/150" // Replace with actual image path
            alt="User 1"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="absolute bottom-0 left-8 bg-yellow-400 text-black rounded-lg px-3 py-1 text-sm">
            Tr.
          </div>
          <div className="bg-white shadow-md p-3 rounded-lg mt-2 text-black">
            Hello, I need some help
          </div>
        </div>

        {/* Second user */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/150" // Replace with actual image path
            alt="User 2"
            className="w-24 h-24 rounded-full object-cover"
          />
          <div className="absolute bottom-0 left-8 bg-purple-500 text-white rounded-lg px-3 py-1 text-sm">
            An.
          </div>
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
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>
    </div>
    
      <div className="text-center max-w-md w-full">
        {/* Main Text */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Get better work done
        </h1>

        {/* Sub Text */}
        <p className="text-gray-500 mb-6">
          See why millions of people across 195 countries use Dash.
        </p>

        {/* Input and Button */}
        <div className="flex items-center justify-center space-x-2">
          <input
            type="email"
            placeholder="Name@company.com"
            className="px-4 py-3 rounded-full border border-gray-300 shadow-sm w-60 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
            Try for free
          </button>
        </div>
      </div>
   
  </div>

  )
}

export default SectionThree