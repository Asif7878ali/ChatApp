import React from 'react';
import { FaSearch } from 'react-icons/fa';
import ProfileDisplay from './componenet/profileDisplay/ProfileDisplay.jsx';


const ContactContainer = () => {
 
  return (
    <div className="relative md:w-[35vw] xl:w-[20vw] border-r border-gray-300 w-full h-screen">
      <section className="left flex flex-col h-full">
       <ProfileDisplay/>
        <div className="p-4">
          <div className="rounded-full flex items-center px-4 py-2 space-x-2 border-2 border-black">
            <FaSearch className="text-gray-500" />
            <input 
              type="text" 
              className="bg-transparent outline-none flex-grow"
              placeholder="Search" 
            />
          </div>
        </div>
        
        {/* Contact List Section */}
        <div className="overflow-y-auto flex-grow">
           <div className="contact-item flex items-center justify-between p-4 cursor-pointer border-b-[1px]">
              <div className="flex items-center space-x-4">
                <img src="https://images.unsplash.com/photo-1620000617482-821324eb9a14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                     alt="profile-image"
                     className="w-10 h-10 rounded-full"/>
                <div>
                  <p className="font-bold">Diana</p>
                </div>
              </div>
            </div>    

            <div className="contact-item flex items-center justify-between p-4 cursor-pointer border-b-[1px]">
              <div className="flex items-center space-x-4">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                     alt="profile-image"
                     className="w-10 h-10 rounded-full"/>
                <div>
                  <p className="font-bold">Payal</p>
                </div>
              </div>
            </div>    
                 
        </div>
      </section>
    </div>
  );
};

export default ContactContainer;