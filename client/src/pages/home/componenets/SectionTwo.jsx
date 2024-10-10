import React from "react";
import { FaPlay } from "react-icons/fa";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { IoMdTime } from "react-icons/io";

const SectionTwo = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          Features For a Better Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <div className="flex justify-center items-center mb-4">
              <i className="text-4x text-[#25d366]">
                <FaPlay size={25} />
              </i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Messaging</h3>
            <p className="text-gray-600">
              This software is very easy for you to manage. You can use it as
              you wish.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <div className="flex justify-center items-center mb-4">
              <i className="text-4xl text-[#25d366]">
              <IoMdTime size={25} />
              </i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Save Your Time</h3>
            <p className="text-gray-600">
              This software is very easy for you to manage. You can use it as
              you wish.
            </p>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-md p-6">
            <div className="flex justify-center items-center mb-4">
              <i className="text-4xl text-[#25d366]">
              <MdOutlinePrivacyTip size={25} />
              </i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Keep Safe & Private</h3>
            <p className="text-gray-600">
              This software is very easy for you to manage. You can use it as
              you wish.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
