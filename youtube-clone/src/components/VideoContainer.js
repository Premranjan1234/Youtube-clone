import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/Contants'
import Videocards from './Videocards';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const [videos,setVideos]=useState([]);
  useEffect(()=>{
     getVideos()
  },[])
  const getVideos=async()=>{
    const data=await fetch(YOUTUBE_VIDEOS_API);
    const json=await data.json();
    console.log(json);
    setVideos(json.items);

    
  }
  return (
    <div className="flex flex-wrap">
      {videos.map(video=>
        <Link to={"/watchpage?v="+video.id}> <Videocards key={video.id} info={video}/> </Link>
        )}
       
    </div>
  )
}

export default VideoContainer