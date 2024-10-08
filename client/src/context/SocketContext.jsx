import {createContext, useContext , useEffect, useRef} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { io } from 'socket.io-client';
import { addMessage } from '../slices/ChatSlice.js';

const SocketContext = createContext(null);
const server = import.meta.env.VITE_SERVER_URL;

export const useSocket = () => {
  return useContext(SocketContext);
}

const SocketProvider = ({ children }) => {
  const socket = useRef();
  const userinfo = useSelector((state) => state?.auth?.user);
  const chatuser = useSelector((state) => state?.chat?.chatUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (userinfo) {
      socket.current = io(server, {
        withCredentials: true,
        query: { userID: userinfo._id },
      });

      socket.current.on("connect", () => {
        console.log('Connected to Socket Server');
      });

      return () => {
        if (socket.current) {
          socket.current.disconnect();
        }
      };
    }
  }, [userinfo]);

  useEffect(() => {
    if (chatuser && socket.current) {
      const messageListener = (message) => {
        console.log(message);
        console.log(chatuser);

        if (chatuser !== null && (
          chatuser._id === message.sender._id || chatuser._id === message.recipient._id
        )) {
          console.log('Message Received:', message?.content);
          dispatch(addMessage(message));
        }
      };

      socket.current.on("recieveMessage", messageListener);

      return () => {
        if (socket.current) {
          socket.current.off("recieveMessage", messageListener);
        }
      };
    }
  }, [chatuser, dispatch]);

  return (
    <SocketContext.Provider value={socket.current}>
      {children}
    </SocketContext.Provider>
  );
}

export default SocketProvider;
