import React from 'react'
import { useSelector } from 'react-redux';


const Videocards = ({info}) => {
  const darkMode=useSelector((store)=>store.app.darkMode)
  
    const {snippet,statistics}=info;
    const{channelTitle,title,thumbnails}=snippet;
    
  return (
    <div className={`p-2 m-3 w-full md:w-80 shadow-lg rounded-lg ${darkMode? "bg-slate-500":"bg-white"} `}>
        <img className="rounded-lg w-full" alt="thumbnails"  src={thumbnails.medium.url}/>
        <ul>
            <li className="font-bold pb-2">{channelTitle}</li>
            <li className='text-3xl md:text-sm'>{title}</li>
            <li className='text-xl md:text-sm'>{statistics.viewCount} views</li>
        </ul>
        
        
    </div>
  )
}

export default Videocards