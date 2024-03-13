import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/Contants';
//import Videocards from './Videocards';
import { Link } from 'react-router-dom';
import WatchpageVideoCard from './WatchpageVideoCard';

const WatchpageVideoContainer = () => {
    const [videos,setVideos]=useState([]);
  useEffect(()=>{
     getVideos()
  },[])
  const getVideos=async()=>{
    const data=await fetch(YOUTUBE_VIDEOS_API);
    const json=await data.json();
    setVideos(json.items);

    
  }
  return (
    <div>
    <div>
      {videos.map(video=>
        <Link to={"/watchpage?v="+video.id}> <WatchpageVideoCard key={video.id} info={video}/> </Link>
        )}
       
    </div>

    </div>
  )
}

export default WatchpageVideoContainer