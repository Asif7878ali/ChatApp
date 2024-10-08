import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import axios from "axios";
import { addMessage } from "../../../../../../slices/ChatSlice.js";

const MessageDisplay = () => {
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef();
  const dispatch = useDispatch();
  const chatMessages = useSelector((state) => state?.chat?.messages);
  const chatData = useSelector((state) => state?.chat?.chatUser);
  const userinfo = useSelector((state) => state?.auth?.user);

  let lastDate = null;

  // Prepare the sender and recipient IDs
  const senderId = userinfo?._id;
  const recipientId = chatData?._id;

  const getMessages = async () => {
    const server = import.meta.env.VITE_SERVER_URL;
    const url = `${server}/api/auth/get/messages`;
    setLoading(true);
    try {
      const resultMsg = await axios.post(url, { senderId, recipientId });
      dispatch(addMessage(resultMsg.data.getMessages));
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (chatData?._id) {
      getMessages(); // Fetch messages on component mount
    }
  }, [chatData]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages]);

  return (
    <div className="flex-1 overflow-y-auto scrollbar-hidden p-4 px-8 w-full">
      {chatMessages.map((message) => {
        const msgDate = moment(message.timeStamp).format("YYYY-MM-DD");
        const showDate = msgDate !== lastDate;
        lastDate = msgDate;

        return (
          <div key={message._id}>
            {showDate && (
              <div className="text-center text-gray-500 my-2">
                {moment(message.timeStamp).format("LL")}
              </div>
            )}
            <div className={`${ message.sender === chatData?._id ? "text-left" : "text-right" }`}>
             
                <div className={`${ message.sender === chatData?._id
                      ? "bg-[#51636d] text-white border-black"
                      : "bg-[#04826b] text-white border-black"
                  } border inline-block p-2 rounded my-1 max-w-[50%] break-words`}>
                  {message.content}
                </div>
              
              <div className="text-sm text-gray-600">
                {moment(message.timeStamp).format("LT")}
              </div>
            </div>
          </div>
        );
      })}
      <div ref={scrollRef} />
    </div>
  );
};

export default MessageDisplay;
