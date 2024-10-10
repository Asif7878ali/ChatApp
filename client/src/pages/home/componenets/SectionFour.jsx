import React from 'react'
import { FaComments, FaUsers, FaGlobe, FaBolt } from 'react-icons/fa'; 

const SectionFour = () => {
  return (
    <div className="flex items-center justify-center  bg-white">
    <div className="flex flex-col md:flex-row max-w-6xl w-full px-6 py-12 space-y-8 md:space-y-0 md:space-x-12">
      {/* Left Section (Text) */}
      <div className="md:w-1/2">
        <h3 className="text-gray-500 text-sm font-semibold mb-2">Why ChatWave?</h3>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Our mission is user convenience
        </h1>
        <p className="text-gray-600">
          Chatwave makes your communication with relatives, work friends, and family more fun. Stay connected with them with plentiful features.
        </p>
      </div>

      {/* Right Section (Stats) */}
      <div className="md:w-1/2 grid grid-cols-2 gap-6">
        {/* Stats Item 1 */}
        <div className="flex items-center space-x-3">
          <FaComments className="text-2xl text-gray-600" />
          <div>
            <h2 className="text-3xl font-bold">20+</h2>
            <p className="text-gray-500">Message Sent</p>
          </div>
        </div>

        {/* Stats Item 2 */}
        <div className="flex items-center space-x-3">
          <FaUsers className="text-2xl text-gray-600" />
          <div>
            <h2 className="text-3xl font-bold">5M</h2>
            <p className="text-gray-500">Active User</p>
          </div>
        </div>

        {/* Stats Item 3 */}
        <div className="flex items-center space-x-3">
          <FaGlobe className="text-2xl text-gray-600" />
          <div>
            <h2 className="text-3xl font-bold">1+</h2>
            <p className="text-gray-500">Available countries</p>
          </div>
        </div>

        {/* Stats Item 4 */}
        <div className="flex items-center space-x-3">
          <FaBolt className="text-2xl text-gray-600" />
          <div>
            <h2 className="text-3xl font-bold">0x</h2>
            <p className="text-gray-500">Send & Upload Speed</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SectionFour