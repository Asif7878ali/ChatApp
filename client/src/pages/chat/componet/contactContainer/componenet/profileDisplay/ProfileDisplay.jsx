import React from "react";
import { FaPowerOff } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const ProfileDisplay = () => {
  return (
    <div className="bg-gray-100 p-4 flex items-center space-x-4">
      <img src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
           alt="User Profile" className="w-12 h-12 rounded-full"/>
      <div className="flex ">
        <p className="font-bold">Username</p>
        <div className="pt-1 md:pl-20 lg:pl-28">
          <div className="flex space-x-3">
            <button className="text-red-600">
              <FaPowerOff size={18} />
            </button>
            <button>
              <FaBars size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDisplay;
