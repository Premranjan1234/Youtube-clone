import React,{useEffect, useState} from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import store from '../utils/Store'
import { generateRandomName, genrateRandomString } from '../utils/Helper'

const LiveChat = () => {
  const [typeChat,setTypeChat]=useState('');
  const dispatch=useDispatch()
  const chatMessage=useSelector((store)=>store.chat.messages);
    useEffect(()=>{
        const i=setInterval(()=>{
           
           dispatch(addMessage({
              name:generateRandomName(),
              message:genrateRandomString(20),
           })
           );
        },2000);

        return()=>clearInterval(i);
    },[]);
  return (
    <>
    <div className='flex p-2 ml-2 border border-black h-[400px] bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse'>
        {chatMessage.map((c,index)=>(
        <ChatMessage key={index} name={c.name} message={c.message}/>
        ))}
    </div>
    <form onSubmit={(e)=>{
      e.preventDefault();
      dispatch(addMessage({
        name:"Prem ranjan",
        message:typeChat,
      }))
      setTypeChat('');
    }} 
      className='ml-2 p-2 w-full border border-black'>
      <input className='w-96 px-2' type="text" value={typeChat} onChange={(e)=>setTypeChat(e.target.value)}/>
       <button className='bg-green-100 mx-2 '>send</button>
    </form>
    </>
  )
}

export default LiveChat