import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/Appslice'
import { YOUTUBE_SEARCH_API } from '../utils/Contants';
import store from '../utils/Store';
import { cacheResults } from '../utils/searchSlice';

const Header = () => {
  const [searchQuery,setSearchQuery]=useState("");
  const [suggestions,setSuggestions]=useState([]);
  const [showSuggestions,setShowSuggestions]=useState(false);
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
    //console.log(json[1]);
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery]:json[1],
    })
    );
  };
  const dispatch=useDispatch()
  const clickHandler=()=>{
    dispatch(toggleMenu());

  };
  return (
    <div className="fixed w-full grid grid-flow-col p-5 m-2 shadow-lg ">
      <div className="flex col-span-1">
        <img 
         className="h-8 mx-2 cursor-pointer"
         onClick={()=>clickHandler()} 
         alt="menu"
         src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8CAgIAAADb29vDw8OxsbHt7e3y8vK4uLiampo7OztmZmaAgIC8vLzT09NhYWEcHBxxcXHi4uITExOioqJXV1eHh4dMTEx7e3uQkJAnJyc1NTX5+fnW1tbJyclAQEBzZbpGAAABTUlEQVR4nO3cC1LCQAwG4LK8lYcioCLi/W9pGa9gkyH9vgt0/tmhGzbNdh0AAAAAAAAAAAAAAAAAAABEW0yHtkzNt9u/tKFdXg95AdeDx/uzygo4b20SobVdTsBlUMA+4ltOwmNUwH4RZykJT2EJJ+2ckvApMOFzSsL3wIQfKQk/AxPOUxJO496lLamw2YTth8ecgF23bwEZ+2dssgL2W+IloGb7Siva7q671XxY2+/MfAAAAAAPY3GbDeuW2wOe/QSctZ2Suod35xZzXpp2ILwOO/Pe5gQ8BPaArykJ14E94JxFjOwf5nQu9ID/M2HOGtb/HdZ/l9bfD0dQ04ygLu3q/7cAAAAAeBDlv9UvP29Rfmam/NxT/dm1+vOH9WdI6/eA689y15/Hr3+nQv17MUZwt8kI7qfp6t8xBAAAAAAAAAAAAAAAAAAAwDj9AgjsI6cJ8n2yAAAAAElFTkSuQmCC"/>
        <img 
         className="h-10"
         alt="logo" 
         src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
        />
      </div>
      <div className="col-span-10 ">
        <div>
        <input 
         onFocus={()=>setShowSuggestions(true)}
         onBlur={()=>setShowSuggestions(false)}
         value={searchQuery} 
         onChange={(e)=> setSearchQuery(e.target.value)} 
         className="w-1/2  border border-gray-400 px-5 py-1 rounded-l-full" 
         type="text"/>
        <button className='border border-gray-400 p-1 rounded-r-full'>
          search
        </button>
        </div>
        {showSuggestions &&(
        <div className="fixed bg-white py-2 px-2 w-[35rem] shadow-lg  rounded-lg border border-gray-100">
          <ul>
            {suggestions.map((s)=><li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">{s}</li>)}
          </ul>
        </div>)}
      </div>
      <div className="col-span-1 flex ">
      <img src="https://img.icons8.com/?size=30&id=H3mmKEsuafpa&format=png" alt="dark-mode"/>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCj-ZQ6Ezbp6QlHXrMXsnz2KG-gc-ZR0FgRw&usqp=CAU"
        alt="bell-icon" className='h-8 px-5'/>
        <img
        className="h-8" 
        alt="image-logo" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&usqp=CAU"
        />
      </div>


    </div>
  )
}

export default Header