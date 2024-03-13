import React from 'react'
import { useSelector } from 'react-redux'
//import Videocards from './Videocards'
import { Link } from 'react-router-dom'
import FetchedVideoCards from './FetchedVideoCards'


const VideoResults = () => {
  const videos=useSelector((store)=>store.fetching.fetchedVideos)
  return (
    
      <div className="flex flex-col md:flex-col  ">
      {videos.map(video=>
        <Link to={"/watchpage?v="+video.id?.videoId}> <FetchedVideoCards key={video.id?.videoId} info={video}/> </Link>
        )}
       
    </div>
        
    
  )
}

export default VideoResults