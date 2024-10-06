import {createContext, useContext , useEffect, useRef} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {io} from 'socket.io-client'
import { addMessage, selectChatData, selectChatType } from '../slices/ChatSlice.js';


const SocketContext = createContext(null);
const server = import.meta.env.VITE_SERVER_URL;

export const useSocket = () =>{
    return useContext(SocketContext);
}
const SocketProvider = ({children}) =>{
     const socket = useRef();
     const userinfo = useSelector((state) => state?.auth?.user);
     const chatType = useSelector(selectChatType);
     const chatData = useSelector(selectChatData);
     const dispatch = useDispatch();
     useEffect(()=>{
          if(userinfo){
            socket.current = io(server,{
                withCredentials : true,
                query : {userID: userinfo._id},
            });
            // connection event
            socket.current.on("connect", () => {
                 console.log('Connected Socket Server');
            })
            //recieve message event 
            socket.current.on("recieveMessage", (message) => {
                console.log(message);
              if(chatType !== undefined && (
                chatData.payload.auth.user._id === message.sender._id || chatData.payload.auth.user._id === message.recipient._id
              )){
                console.log('Message Recieved:- ',message?.content);
                   dispatch(addMessage(message));
              }
            })
            return () => {
                //disconnecion event
                socket.current.disconnect();
            }
          }
     },[userinfo])
     return (
        <SocketContext.Provider value={socket.current}>
            {children}
        </SocketContext.Provider>
     )
}
export default SocketProvider;