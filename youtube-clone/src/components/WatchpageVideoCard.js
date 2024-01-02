import React from 'react'

const WatchpageVideoCard = ({info}) => {
    console.log(info);
    const {snippet,statistics}=info;
    const{channelTitle,title,thumbnails}=snippet;
  return (
    <div>
        <div className="p-2 m-3 shadow-lg w-[80%] rounded-lg grid grid-cols-9">
        <img className=" col-span-4 rounded-lg" alt="thumbnails"  src={thumbnails.medium.url}/>
        <ul className=' col-span-5 pl-2'>
            <li className="font-bold pb-2">{channelTitle}</li>
            <li>{title}</li>
            <li>{statistics.viewCount} views</li>
        </ul>
        
        
    </div>

    </div>
  )
}

export default WatchpageVideoCard