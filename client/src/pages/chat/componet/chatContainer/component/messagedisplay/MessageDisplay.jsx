import { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import moment from 'moment';
import axios from "axios";
import { addMessage } from '../../../../../../slices/ChatSlice.js';


const MessageDisplay = () => {
    
    const [loading , setLoading] = useState(false);
    const scrollref = useRef();
    const dispatch = useDispatch();
    const chatMessages = useSelector((state) => state?.chat?.messages);
    const chatData = useSelector((state) => state?.chat?.chatUser);
    const userinfo = useSelector((state) => state?.auth?.user);

    // Prepare the sender and recipient IDs
     const senderId = userinfo?._id; 
     const recipientId = chatData?._id;
     console.log(senderId, recipientId);

   function renderMessage(){
      let lastDate = null;
      return chatMessages.map((message, index)=>{
        let msgdate = moment(message.timeStamp).format("YYYY-MM-DD");
        let showdate = msgdate!= lastDate
        lastDate = msgdate;
        return (
           <div key={index}>
                {showdate && (
                  <div className='text-center text-gray-500 my-2'>
                    {moment(message.timeStamp).format("LL")}
                  </div>
                )}
                {renderDmMsg(message)}
           </div>
        )
      });
   }
   function renderDmMsg(message) {
    console.log(chatData);
    return (
      <div className={`${message.sender === chatData?._id ? 'text-left' : 'text-right'}`}>
        {message.messageType == 'text' && (
          <div
            className={`${
              message.sender === chatData?._id
                ? 'bg-[#51636d] text-white border-black' 
                : 'bg-[#04826b] text-white border-black'
            } border inline-block p-2 rounded my-1 max-w-[50%] break-words`}
          >
            {message.content}
          </div>
        )}
        <div className='text-sm text-gray-600'>
          {moment(message.timeStamp).format('LT')}
        </div>
      </div>
    );
  }

  const getmessages = async () => {
    const server = import.meta.env.VITE_SERVER_URL;
    const Url = `${server}/api/auth/get/messages`;
    setLoading(true)
    try {
      const resultMsg = await axios.post(Url, {senderId, recipientId} );
      console.log(resultMsg);
      dispatch(addMessage(resultMsg.data.getMessages));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  // useEffect(() => {
  //   if (chatData?._id) {
  //     getmessages(); // Fetch messages on component mount
  //   }
  // }, [chatData]); 
  

  useEffect(() => {
    if(scrollref.current){
      scrollref.current.scrollIntoView({behavior: 'smooth'});
    }
  }, [chatMessages]);

  return (
    <div className='flex-1 overflow-y-auto scrollbar-hidden p-4 px-8 w-full'>
        {renderMessage()}
        <div ref={scrollref}/>
    </div>
  )
}

export default MessageDisplay