import { useState } from 'react'
import { GrAttachment } from "react-icons/gr";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { IoSend } from "react-icons/io5";
import EmojiPicker from 'emoji-picker-react';


const MessageBar = () => {
   
  const [emojiPicker, setEmojiPicker] = useState(false); 
  const handleEmojiPick = () => {
    setEmojiPicker(prevState => !prevState);
  };
  

  return (
    <div className='h-[10vh] flex justify-center items-center px-8 mb-6 gap-6'>
      <div className='flex-1 flex rounded-md items-center gap-5 pr-5'>
        <input type="text" className='flex-1 p-5 bg-transparent rounded-md focus:border-2 focus:outline border-[1px] border-black bg-slate-100'
        placeholder='Enter Message'/>
        <button>
           <GrAttachment />
        </button>
        <div className='relative'>
           <button onClick={handleEmojiPick}>
           <MdOutlineEmojiEmotions />
           </button>
           {emojiPicker && (
            <div className='absolute bottom-16 right-0 z-50'>
              <EmojiPicker />
            </div>
          )}
        </div>
      </div>
      <button>
        <IoSend />
      </button>
    </div>
  )
}

export default MessageBar