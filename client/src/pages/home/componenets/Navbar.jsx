import React from 'react'
import Logo from '../../../assets/chatwave.png'

const Navbar = () => {
  return (
    <nav className="bg-[#f2f3ef] py-3 px-8 flex justify-between items-center">
    {/* Left side - Logo and links */}
    <div className="flex items-center space-x-6">
      {/* WhatsApp Logo */}
      <div className="flex items-center">
        <img src={Logo} alt="WhatsApp Logo" className="h-12 w-full" />
      </div>
      
      {/* Navbar Links */}
      <div className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
        <a className="hover:underline">Features</a>
        <a  className="hover:underline">Privacy</a>
        <a  className="hover:underline">Help Center</a>
        <a  className="hover:underline">Apps</a>
      </div>
    </div>

    {/* Right side - Log In and Download buttons */}
    <div className="flex items-center space-x-4">
      <button className="text-sm font-medium text-gray-700 border border-gray-400 py-3 px-4 rounded-full hover:bg-gray-200">Log In</button>
      <button className="text-sm font-medium text-white bg-[#25d366] py-3 px-4 rounded-full hover:bg-[#20b85c]">Download </button>
    </div>
  </nav>
  )
}

export default Navbar