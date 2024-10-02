import React from "react";
import { useSelector } from "react-redux";

const ChatHeader = () => {
  const chatUserinfo = useSelector((state) => state?.chat?.chatUser);

  return (
    <div className="h-[10vh] border-b-2 border-black flex ">
      <div className="flex items-center">
        {!chatUserinfo ? ( <div className="flex px-10 items-center space-x-5">
          <img
            src="https://wingandaprayer.live/wp-content/uploads/2018/07/no-image-available.jpg"
            alt="User Profile"
            className="w-12 h-12 rounded-full"
          />
          <h2>chatUserinfo...</h2>
        </div>) :(
           <div className="flex px-10 items-center space-x-5">
           <img
             src={chatUserinfo?.image}
             alt="User Profile"
             className="w-12 h-12 rounded-full"
           />
           <h2>{chatUserinfo?.username}</h2>
         </div>
        )}
       
      </div>
    </div>
  );
};

export default ChatHeader;
