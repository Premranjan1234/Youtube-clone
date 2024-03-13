import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setResults } from '../utils/Appslice';

const FetchedVideoCards = ({info}) => {
    const darkMode=useSelector((store)=>store.app.darkMode)
    const dispatch=useDispatch()
       const configure=()=>{
          dispatch(setResults(false));
       }
      const {snippet}=info;
      const{channelTitle,title,thumbnails}=snippet;
      
    return (
      <div onClick={()=>configure()} className={`md:grid md:grid-cols-12 p-2 m-3 w-full md:w-1/2 shadow-lg rounded-lg ${darkMode? "bg-slate-500":"bg-white"} `}>
          <img className=" md:col-span-6 colrounded-lg w-full" alt="thumbnails"  src={thumbnails.medium.url}/>
          <ul className=' md:col-span-6 mx-2'>
              <li className="font-bold pb-2">{channelTitle}</li>
              <li className='text-3xl md:text-sm'>{title}</li>
          </ul>
          
          
      </div>
    )
  }

export default FetchedVideoCards