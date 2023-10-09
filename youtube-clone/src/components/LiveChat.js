import React from 'react'
import ChatMessage from './ChatMessage'

const LiveChat = () => {
  return (
    <div className='p-2 ml-2 border border-black h-[400px] bg-slate-100 rounded-lg'>
        <ChatMessage name="Prem" message="Hello"/>
    </div>
  )
}

export default LiveChat