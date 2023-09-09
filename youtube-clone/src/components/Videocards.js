import React from 'react'

const Videocards = ({info}) => {
    console.log(info);
    const {snippet,statistics}=info;
    const{channelTitle,title,thumbnails}=snippet;
  return (
    <div className="p-2 m-3 w-72 shadow-lg">
        <img className="rounded-lg" alt="thumbnails"  src={thumbnails.medium.url}/>
        <ul>
            <li className="font-bold pb-2">{channelTitle}</li>
            <li>{title}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
        
        
    </div>
  )
}

export default Videocards