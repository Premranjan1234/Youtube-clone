import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from '../utils/Appslice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import WatchpageVideoContainer from './WatchpageVideoContainer';
import VideoResults from './VideoResults';

const Watchpage = () => {
  const [searchParams]=useSearchParams();
  console.log(searchParams.get("v"));
  const dispatch=useDispatch();
  useEffect(()=>{
     dispatch(closeMenu());
  },[])
  const darkMode=useSelector((store)=>store.app.darkMode)
  const resultpage=useSelector((store)=>store.app.results)
  
  return (
    <>
    {resultpage?<VideoResults/>:
    <div className={`flex flex-col  sm:w-screen md:w-screen lg:w-full xl:w-full ${darkMode?" bg-slate-500":"bg-white"}` }>
    <div className={`px-2 md:px-4  md:flex sm:flex-col md:flex-row   ${darkMode?" bg-slate-500":"bg-white"}`}>
      <div className={`w-full ${darkMode?" bg-slate-500":"bg-white"}`}>
      <iframe 
       width="800" height="400" 
       className='w-screen md:w-[800px] h-[400px] md:h-[400px] '
       src={"https://www.youtube.com/embed/"+searchParams.get("v") }
       title="YouTube video player" 
       frameBorder="0" 
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       allowFullScreen>

      </iframe>
      <CommentsContainer/>
      </div>
      
    
    <div className={`w-full ${darkMode?" bg-slate-500":"bg-white"}`}>
        <LiveChat/>
        <WatchpageVideoContainer/>
    </div>
    </div>
    </div>
    }
    </>
    
   
  )
}

export default Watchpage