import React from 'react'



const ChatMessage = ({name,message}) => {
  return (
    <div className="flex text-center shadow-sm">
        <img
        className="h-8" 
        alt="image-logo" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&usqp=CAU"
        />
        <span className="font-bold px-2">{name}</span>
        <span>{message}</span>
    </div>
  )
}

export default ChatMessage