import { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import Messages from "./componenet/Messages.jsx";
import moment from "moment";
import { useSocket } from "../../../../../../context/SocketContext.jsx";

const MessagesRender = () => {
  const chatData = useSelector((state) => state?.chat?.chatUser);
  const userinfo = useSelector((state) => state?.auth?.user);
  const socket = useSocket(); // Use Socket from context
  const [chatMessages, setChatMessages] = useState([]);

  const senderId = userinfo?._id;
  const recipientId = chatData?._id;

  console.log("Sender ID:", senderId, "Receiver ID:", recipientId);

  const server = import.meta.env.VITE_SERVER_URL;

  // API to fetch messages
  const fetchMessages = useCallback(async () => {
    const url = `${server}/api/auth/get/messages`;

    try {
      const resultMsg = await axios.post(url, { senderId, recipientId });
      console.log("Fetched Messages:", resultMsg.data.getMessages);
      setChatMessages(resultMsg.data.getMessages);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  }, [senderId, recipientId]);

  // Use effect to fetch messages on component mount
  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  // Socket listener to detect new messages and re-fetch messages
  useEffect(() => {
    if (socket) {
      const handleNewMessage = () => {
        console.log("New message detected, re-fetching...");
        fetchMessages(); // Re-fetch messages
      };

      socket.on("recieveMessage", handleNewMessage);

      return () => {
        socket.off("recieveMessage", handleNewMessage); // Clean up
      };
    }
  }, [socket, fetchMessages]);

  let lastDate = null;

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
            <Messages key={message._id} data={message} />
          </div>
        );
      })}
    </div>
  );
};

export default MessagesRender;
