import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEOS_API } from '../utils/Contants'
import Videocards from './Videocards';
import { Link } from 'react-router-dom';
import Shimmer from './Shimmer';

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
    <>
    {videos.length===0?<Shimmer/>:
    <div className="flex flex-col md:flex-row md:flex-wrap ">
      {videos.map(video=>
        <Link to={"/watchpage?v="+video.id}> <Videocards key={video.id} info={video}/> </Link>
        )}
       
    </div>
    }
    </>
  )
}

export default VideoContainer