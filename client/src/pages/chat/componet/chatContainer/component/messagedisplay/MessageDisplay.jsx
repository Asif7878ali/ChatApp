import { useEffect, useState } from 'react'
import {useSocket} from '../../../../../../context/SocketContext.jsx';

const MessageDisplay = () => {
    
  const [messages, setMessages] = useState([]);
  const socket = useSocket();
  console.log(messages);

  useEffect(() => {
    // Server se message receive karte waqt ye event handle karega
    socket.on("recieveMessaage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]); // Messages list update kar rahe hain
    });
    // Cleanup function to remove listener on unmount componenet
    return () => {
      socket.off("recieveMessaage");
    };
  }, [socket]);

  return (
    <div className='flex-1 overflow-y-auto scrollbar-hidden p-4 px-8 w-full'>
    {messages.map((msg, index) => (
      <div key={index} className='my-2 p-2 border border-gray-300 rounded-lg'>
        <strong>{msg.sender.firstname}: </strong> {msg.content}
      </div>
    ))}
  </div>
  )
}

export default MessageDisplay