import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { addMessage } from "../../../../../../slices/ChatSlice.js";

const MessageDisplay = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const chatMessages = useSelector((state) => state?.chat?.messages) || []; // Default to an empty array
  const chatData = useSelector((state) => state?.chat?.chatUser);
  const userinfo = useSelector((state) => state?.auth?.user);

  // Prepare the sender and recipient IDs
  const senderId = userinfo?._id;
  const recipientId = chatData?._id;

  const getMessages = async () => {
    const server = import.meta.env.VITE_SERVER_URL;
    const url = `${server}/api/auth/get/messages`;
    setLoading(true);
    try {
      const resultMsg = await axios.post(url, { senderId, recipientId });
      console.log(resultMsg);
      dispatch(addMessage(resultMsg.data.getMessages));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMessages(); // Fetch messages on component mount
  }, []);

  return (
    <div className="flex-1 overflow-y-auto scrollbar-hidden p-4 px-8 w-full">
      {console.log(chatMessages)}
      {chatMessages.map((message) => {
        console.log("render message", message); // Log the message
        
        return (
          <div
            key={message._id}
            className={`${
              message.sender === chatData?._id ? "text-left" : "text-right"
            }`}
          >
            <div
              className={`${
                message.sender === chatData?._id
                  ? "bg-[#51636d] text-white"
                  : "bg-[#04826b] text-white"
              } border border-black inline-block p-2 rounded my-1 max-w-[50%] break-words`}
            >
              {message.content || "No message"}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MessageDisplay;
