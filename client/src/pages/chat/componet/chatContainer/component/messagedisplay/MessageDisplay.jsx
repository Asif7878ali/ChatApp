import { useEffect, useRef } from 'react'
import { useSelector } from "react-redux";
import moment from 'moment';


const MessageDisplay = () => {
    
    const scrollref = useRef();
    const chatMessages = useSelector((state) => state?.chat?.messages);
    const chatData = useSelector((state) => state?.chat?.chatUser);

   function renderMessage(){
      let lastDate = null;
      return chatMessages.map((message, index)=>{
        let msgdate = moment(message.timestamp).format("YYYY-MM-DD");
        let showdate = msgdate!= lastDate
        lastDate = msgdate;
        return (
           <div key={index}>
                {showdate && (
                  <div className='text-center text-gray-500 my-2'>
                    {moment(message.timestamp).format("LL")}
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
      <div className={`${message.sender._id === chatData?._id ? 'text-left' : 'text-right'}`}>
        {message.messageType === 'text' && (
          <div
            className={`${
              message.sender._id !== chatData?._id
                ? 'bg-[#04826b] text-white border-black'
                : 'bg-[#51636d] text-white border-black'
            } border inline-block p-2 rounded my-1 max-w-[50%] break-words`}
          >
            {message.content}
          </div>
        )}
        <div className='text-sm text-gray-600'>
          {moment(message.timestamp).format('LT')}
        </div>
      </div>
    );
  }
  

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