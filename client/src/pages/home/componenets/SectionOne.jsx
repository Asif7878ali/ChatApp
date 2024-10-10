import React from 'react'

const SectionOne = () => {
  return (
    <section className="bg-white py-16">
    <div className="container mx-auto px-6 md:px-12 lg:px-24 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
      
      {/* Left Side: Text Section */}
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
          Let’s Connect <br /> with Your Customer <br /> in Real Time
        </h1>
        <p className="text-lg text-gray-600">
          Great software that allows you to chat from any place at any time without any interruption.
        </p>
        <button className="bg-orange-500 text-white font-medium py-3 px-6 rounded-full hover:bg-orange-600 transition">
          Start Chatting Now <span className="ml-2">➡️</span>
        </button>

        {/* Stats Section */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <img 
              src="https://randomuser.me/api/portraits/men/32.jpg" 
              alt="User" 
              className="h-10 w-10 rounded-full border-2 border-white shadow-md"
            />
            <img 
              src="https://randomuser.me/api/portraits/women/44.jpg" 
              alt="User" 
              className="h-10 w-10 rounded-full border-2 border-white shadow-md -ml-4"
            />
            <p className="text-lg font-semibold text-gray-900">
              2,291 <br /><span className="text-sm text-gray-500">Happy Customers</span>
            </p>
          </div>

          <div className="text-lg font-semibold text-gray-900">
            4.8/5 <br /><span className="text-sm text-gray-500">Rating</span>
          </div>
        </div>
      </div>

      {/* Right Side: Image Section */}
      <div className="relative">
        {/* Main Image */}
        <img 
          src="https://img.freepik.com/free-vector/conversation-concept-illustration_114360-1305.jpg?w=740&t=st=1724871547~exp=1724872147~hmac=d39930e9f3c3337fb5876fd3ec18e8091f4e8b65c2e2c0fc6ac3b3defe6ec792" 
          alt="Person with phone" 
          className="w-full lg:w-3/4 mx-auto"
        />

        {/* Chat Bubbles */}
        <div className="absolute top-10 left-0 w-48 p-4 bg-white rounded-xl shadow-lg">
          <p className="text-sm font-semibold text-gray-800">Rihana</p>
          <p className="text-sm text-gray-600">Hii</p>
        </div>
        
        <div className="absolute bottom-10 right-0 w-48 p-4 bg-white rounded-xl shadow-lg">
          <p className="text-sm font-semibold text-gray-800">Random Khan</p>
          <p className="text-sm text-gray-600">Bye</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default SectionOne