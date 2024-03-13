import React,{useEffect, useState} from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import store from '../utils/Store'
import { generateRandomName, genrateRandomString } from '../utils/Helper'

const LiveChat = () => {
  const [showchat,setshowchat]=useState(true);
  const [typeChat,setTypeChat]=useState('');
  const dispatch=useDispatch()
  const chatMessage=useSelector((store)=>store.chat.messages);
  const darkMode=useSelector((store)=>store.app.darkMode)
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
    const handleChat=()=>{
      showchat?setshowchat(false):setshowchat(true)
    }
  return (
    <div>
    { showchat &&<>
    <div className={`flex w-full p-2 ml-2  border border-black h-[300px] ${darkMode?"bg-slate-500":"bg-slate-100"}  rounded-lg overflow-y-scroll flex-col-reverse`}>
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
      className='flex ml-2 p-2 rounded-md w-full border border-black'>
      <input className='w-25 md:w-96 px-2 bg-slate-400 rounded-md py-2 border-black' type="text" value={typeChat} onChange={(e)=>setTypeChat(e.target.value)}/>
       <button className='bg-black text-white my-2 md:my-0 mx-2 px-4 py-2 rounded-md  '>send</button>
    </form></>}
    <button onClick={handleChat} className=" w-full bg-slate-300 py-2 my-2 mx-2 rounded-lg text-black">{showchat?'hideChat': 'showChat'}</button>
    </div>
  )
}

export default LiveChat