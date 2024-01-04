import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const isMenuOpen=useSelector((store)=>store.app.isMenuOpen)
  const darkMode=useSelector((store)=>store.app.darkMode)
  //Early return
  if(!isMenuOpen) return null;
  return (
    <div className={`p-5 shadow-lg w-48 ${darkMode?"bg-slate-500":"bg-white"}`}>
      <ul>
        <li className=' py-2 flex'>
        <img className=' pr-4' src="https://img.icons8.com/?size=20&id=2797&format=png"
           alt="home-icon"/>
        <Link to="/">
          Home
        </Link></li>
        <li className='py-2 flex'>
          <img className=' pr-4' src="https://img.icons8.com/?size=20&id=O2MNlowrNMsk&format=png"
           alt="shorts-icon"/>
          Shorts
        </li>
        <li className='py-2 flex'>
        <img className=' pr-4' src="https://img.icons8.com/?size=20&id=9672&format=png"
           alt="explore-icon"/>
          Explore
        </li>
        <li className='py-2 flex'>
        <img className=' pr-4' src="https://img.icons8.com/?size=20&id=EHtxO8ZmA602&format=png"
           alt="music-icon"/>
          Music
        </li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li className='py-2 flex'>
        <img className=' pr-4' src="https://img.icons8.com/?size=20&id=EHtxO8ZmA602&format=png"
           alt="music-icon"/>
          Music
        </li>
        <li className='py-2 flex'>
        <img className=' pr-4' src="https://img.icons8.com/?size=20&id=2073&format=png"
           alt="sport-icon"/>
          Sports
        </li>
        <li className='py-2 flex'>
        <img className=' pr-4' src="https://img.icons8.com/?size=20&id=J2AwyRUPwjyg&format=png"
           alt="game-icon"/>
          Gaming
        </li>
        <li className='py-2 flex'>
        <img className=' pr-4' src="https://img.icons8.com/?size=20&id=9683&format=png"
           alt="movie-icon"/>
          Movies
        </li>
      </ul>
      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li className='py-2 flex'>
        <img className=' pr-4' src="https://img.icons8.com/?size=20&id=EHtxO8ZmA602&format=png"
           alt="music-icon"/>
          Music
        </li>
        <li className='py-2 flex'>
        <img className=' pr-4' src="https://img.icons8.com/?size=20&id=2073&format=png"
           alt="sport-icon"/>
          Sports
        </li>
        <li className='py-2 flex'>
        <img className=' pr-4' src="https://img.icons8.com/?size=20&id=J2AwyRUPwjyg&format=png"
           alt="game-icon"/>
          Gaming
        </li>
        <li className='py-2 flex'>
        <img className=' pr-4' src="https://img.icons8.com/?size=20&id=9683&format=png"
           alt="movie-icon"/>
          Movies
        </li>
      </ul>
        
    </div>
  )
}

export default Sidebar