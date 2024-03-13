import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu,toggleDarkMode, setResults, openMenu } from '../utils/Appslice'
import { YOUTUBE_SEARCH_API } from '../utils/Contants';
//import store from '../utils/Store';
import { cacheResults } from '../utils/searchSlice';
import { YOUTUBE_FETCH_APIONE,YOUTUBE_FETCH_APITWO } from '../utils/Contants';
import { Link } from 'react-router-dom';
import { setFetchedVideos } from '../utils/fetchSlice';



const Header = () => {
  const [searchQuery,setSearchQuery]=useState("");
  const [suggestions,setSuggestions]=useState([]);
  const [showSuggestions,setShowSuggestions]=useState(false);
  const darkMode=useSelector((store)=>store.app.darkMode)
  const searchCache=useSelector((store)=>store.search);
  
  useEffect(()=>{
     
     const timer=setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }
      else{
        getSearchSuggestion();
      }
      
      
     },200);

     return()=>{
      clearTimeout(timer);
     };
  },[searchQuery]);
  
  
  
  const getSearchSuggestion=async()=>{
    const data=await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json=await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery]:json[1],
    })
    );
  };
  const fetchSearchVideos=async(s)=>{
    setShowSuggestions(false);
    let query=encodeURIComponent(s);
    const data=await fetch(`${YOUTUBE_FETCH_APIONE}${query}${YOUTUBE_FETCH_APITWO}`);
    const json=await data.json();
    dispatch(setFetchedVideos(json.items));
    dispatch(setResults(true));
    dispatch(openMenu());

}
  const dispatch=useDispatch()
  const clickHandler=()=>{
    dispatch(toggleMenu());
  };
  const handleDarkMode=()=>{
     dispatch(toggleDarkMode());
  }
  return (
    <div className={` fixed w-full ${darkMode?"bg-slate-500": "bg-white"} grid grid-flow-col p-5 m-2 mt-0 ml-0 mr-0 shadow-lg`}>
      <div className="flex col-span-1">
        
        <img 
         className="h-8 mx-2 cursor-pointer"
         onClick={()=>clickHandler()} 
         alt="menu"
         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8CAgIAAADb29vDw8OxsbHt7e3y8vK4uLiampo7OztmZmaAgIC8vLzT09NhYWEcHBxxcXHi4uITExOioqJXV1eHh4dMTEx7e3uQkJAnJyc1NTX5+fnW1tbJyclAQEBzZbpGAAABTUlEQVR4nO3cC1LCQAwG4LK8lYcioCLi/W9pGa9gkyH9vgt0/tmhGzbNdh0AAAAAAAAAAAAAAAAAAABEW0yHtkzNt9u/tKFdXg95AdeDx/uzygo4b20SobVdTsBlUMA+4ltOwmNUwH4RZykJT2EJJ+2ckvApMOFzSsL3wIQfKQk/AxPOUxJO496lLamw2YTth8ecgF23bwEZ+2dssgL2W+IloGb7Siva7q671XxY2+/MfAAAAAAPY3GbDeuW2wOe/QSctZ2Suod35xZzXpp2ILwOO/Pe5gQ8BPaArykJ14E94JxFjOwf5nQu9ID/M2HOGtb/HdZ/l9bfD0dQ04ygLu3q/7cAAAAAeBDlv9UvP29Rfmam/NxT/dm1+vOH9WdI6/eA689y15/Hr3+nQv17MUZwt8kI7qfp6t8xBAAAAAAAAAAAAAAAAAAAwDj9AgjsI6cJ8n2yAAAAAElFTkSuQmCC"/>
        <img 
         className="h-10 hidden md:block"
         alt="logo" 
         src="https://img.icons8.com/?size=48&id=13983&format=png"
        />
      </div>
      <div className="col-span-10 ">
        <div>
        <input 
         onFocus={()=>setShowSuggestions(true)}
         onBlur={()=>setShowSuggestions(true)}
         value={searchQuery} 
         onChange={(e)=> setSearchQuery(e.target.value)} 
         className={`w-1/2 ${darkMode?" bg-slate-500":"bg-white"} border border-gray-400 px-5 py-1 rounded-l-full`}
         type="text"/>
        <button className='border border-gray-400 p-1 rounded-r-full'>
          search
        </button>
        </div>
        
        {showSuggestions &&(
          
        <div className={`fixed ${darkMode?"bg-slate-500":"bg-white"}  py-2 px-2 w-[20rem] md:w-[35rem] shadow-lg  rounded-lg border border-gray-100`}>
          <ul>
            {suggestions.map((suggestion)=>
            (<li onClick={() => fetchSearchVideos(suggestion)}  key={suggestion}  className="py-2 px-3 shadow-sm hover:cursor-pointer ">
             {suggestion}
             </li>
            ))}
          </ul>
        </div>)}
      </div>
      
      <div className="col-span-1 flex  ">
      <img onClick={handleDarkMode} className=" h-8 hover:cursor-pointer" src="https://img.icons8.com/?size=20&id=H3mmKEsuafpa&format=png" alt="dark-mode"/>
      <img src="https://img.icons8.com/?size=20&id=32058&format=png"
        alt="bell-icon" className=' h-8 px-5 hidden md:block '/>
      <img
        className="h-8 hidden md:block  " 
        alt="image-logo" 
        src="https://img.icons8.com/?size=24&id=ABBSjQJK83zf&format=png"
      />
      </div>


    </div>
  )
}

export default Header