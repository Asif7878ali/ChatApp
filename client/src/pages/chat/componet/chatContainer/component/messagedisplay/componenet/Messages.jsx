import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";

const Messages = ({ data }) => {
  const chatData = useSelector((state) => state?.chat?.chatUser);
  const { sender, recipient, messageType, content, timeStamp } = data;
  console.log(content);
  return (
    <div>
      <div
        className={`${sender === chatData?._id ? "text-left" : "text-right"}`}
      >
        <div
          className={`${
            sender === chatData?._id
              ? "bg-[#51636d] text-white"
              : "bg-[#04826b] text-white"
          } border border-black inline-block p-2 rounded my-1 max-w-[50%] break-words`}
        >
          {" "}
          {content || "No message"}
        </div>
        <div className="text-sm text-gray-600">
          {moment(timeStamp).format("LT")}
        </div>
      </div>
    </div>
  );
};

export default Messages;
