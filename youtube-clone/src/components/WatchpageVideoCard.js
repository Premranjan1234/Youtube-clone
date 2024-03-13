import React from 'react'
import { useSelector } from 'react-redux';

const WatchpageVideoCard = ({info}) => {
    const {snippet,statistics}=info;
    const{channelTitle,title,thumbnails}=snippet;
    const darkMode=useSelector((store)=>store.app.darkMode)
  return (
    
        <div className={`${darkMode?" bg-slate-500":"bg-white"} p-2 m-3 shadow-lg w-[100%] md:w-[80%] rounded-lg grid grid-cols-9`}>
        <img className=" col-span-4 rounded-lg h-full" alt="thumbnails"  src={thumbnails.medium.url}/>
        <ul className=' col-span-5 pl-2'>
            <li className=" font-bold pb-2">{channelTitle}</li>
            <li className=' text-sm'>{title}</li>
            <li className='text-sm'>{statistics.viewCount} views</li>
        </ul>
        
        
    </div>

    
  )
}

export default WatchpageVideoCard