import React,{useEffect} from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/chatSlice'
import store from '../utils/Store'
import { generateRandomName, genrateRandomString } from '../utils/Helper'

const LiveChat = () => {
  const dispatch=useDispatch()
  const chatMessage=useSelector((store)=>store.chat.messages);
    useEffect(()=>{
        const i=setInterval(()=>{
           console.log("API POLLING");
           dispatch(addMessage({
              name:generateRandomName(),
              message:genrateRandomString(20),
           })
           );
        },2000);

        return()=>clearInterval(i);
    },[]);
  return (
    <div className='flex p-2 ml-2 border border-black h-[400px] bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse'>
        {chatMessage.map((c,index)=>(
        <ChatMessage key={index} name={c.name} message={c.message}/>
        ))}
    </div>
  )
}

export default LiveChat