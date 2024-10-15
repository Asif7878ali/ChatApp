import React from "react";
import { useSelector } from "react-redux";

const MessageMap = ({ message }) => {
  const chatData = useSelector((state) => state?.chat?.chatUser);
  const { sender, recipient, messageType, content, timeStamp } = message;

  // Debugging statement
  console.log(message); // This will log the content of the current message

  return (
    <div className={`${
      sender === chatData?._id ? "text-left" : "text-right"
    }`}>
      <div className={`${
        sender === chatData?._id
          ? "bg-[#51636d] text-white"
          : "bg-[#04826b] text-white"
      } border border-black inline-block p-2 rounded my-1 max-w-[50%] break-words`}>
        {content || "No message"}
      </div>
    </div>
  );
};

export default MessageMap;
