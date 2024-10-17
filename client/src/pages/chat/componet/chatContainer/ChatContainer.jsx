import React from 'react'
import ChatHeader from './component/charHeader/ChatHeader.jsx';
import MessageBar from './component/messageBar/MessageBar.jsx';
import MessagesRender from './component/messagedisplay/MessagesRender.jsx';

 const ChatContainer = () => {
  return (
    <div className='fixed top-0 h-[100vh] w-[100vw] flex flex-col md:static md:flex-1'>
     <ChatHeader/>
     <MessagesRender/>
     <MessageBar/>
    </div>
  )
}

export default ChatContainer;
