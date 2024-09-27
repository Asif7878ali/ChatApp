import React from 'react'
import chatlogo from '../../../../assets/chatwave.png';

const EmptyChatContainer = () => {
  return (
    <div className='flex-1 md:flex flex-col justify-center items-center hidden'>
     <img className='h-56 w-72' src={chatlogo} alt="our logo"/>
     <div className='text-opacity-80 flex flex-col gap-5 items-center mt-10 lg:text-4xl text-3xl text-center'>
       <h3>Hii 
        <span className='ml-2'>Welcome to</span>
        <span className='text-green-600 ml-2'>ChatWave</span>
        </h3>
     </div>
    </div>
  )
}

export default EmptyChatContainer