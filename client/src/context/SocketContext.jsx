import {createContext, useContext , useEffect, useRef} from 'react';
import { useSelector } from "react-redux";
import {io} from 'socket.io-client'

const SocketContext = createContext(null);
const server = import.meta.env.VITE_SERVER_URL;

export const useSocket = () =>{
    return useContext(SocketContext);
}
const SocketProvider = ({children}) =>{
     const socket = useRef();
     const userinfo = useSelector((state) => state?.auth?.user);
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
            // //recieve message event 
            // socket.current.on("recieveMessage", (message) => {

            // })
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