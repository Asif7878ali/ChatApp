import React from 'react'
import { useSelector } from "react-redux";

const Chat = () => {
    const profileSetup = useSelector((state) => state?.auth?.user);
    console.log(profileSetup);
  return (
    <div> Chat</div>
  )
}

export default Chat