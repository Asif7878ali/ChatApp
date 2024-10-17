import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Messages from "./componenet/Messages.jsx";
import moment from "moment";

const MessagesRender = () => {
  const chatData = useSelector((state) => state?.chat?.chatUser);
  const userinfo = useSelector((state) => state?.auth?.user);
  const [chatMessages, setChatmessages] = useState([]);
  // Prepare the sender and recipient IDs
  let senderId = userinfo?._id;
  let recipientId = chatData?._id;
  console.log("sender id", senderId, "Recever id", recipientId);

  const MessagesFetchServer = async () => {
    const server = import.meta.env.VITE_SERVER_URL;
    const url = `${server}/api/auth/get/messages`;

    try {
      const resultMsg = await axios.post(url, { senderId, recipientId });
      console.log(resultMsg);
      setChatmessages(resultMsg.data.getMessages);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(chatMessages);

  const msgDate = moment(chatMessages.timeStamp).format("YYYY-MM-DD");
  let lastDate = null;
  const showDate = msgDate !== lastDate;
  lastDate = msgDate;
  useEffect(() => {
    MessagesFetchServer(); // Fetch messages on component mount
  }, []);

  return (
    <div className="flex-1 overflow-y-auto scrollbar-hidden p-4 px-8 w-full">
      <div>
        {showDate && (
          <div className="text-center text-gray-500 my-2">
            {moment(chatMessages.timeStamp).format("LL")}
          </div>
        )}
      </div>
      {chatMessages.map((messages) => (
        <Messages key={messages._id} data={messages} />
      ))}
    </div>
  );
};

export default MessagesRender;
