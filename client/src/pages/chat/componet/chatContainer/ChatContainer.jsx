import React from 'react'
import ChatHeader from './component/charHeader/ChatHeader.jsx';
import MessageDisplay from './component/messagedisplay/MessageDisplay.jsx';
import MessageBar from './component/messageBar/MessageBar.jsx';

 const ChatContainer = () => {
  return (
    <div className='fixed top-0 h-[100vh] w-[100vw] flex flex-col md:static md:flex-1'>
     <ChatHeader/>
     <MessageDisplay/>
     <MessageBar/>
    </div>
  )
}

export default ChatContainer;
