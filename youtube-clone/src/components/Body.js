import React from 'react'
import Sidebar from './Sidebar'
//import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Body = () => {
  const darkMode=useSelector((store)=>store.app.darkMode)
  
  return (
    <div className={`flex pt-[80px] ${darkMode?"bg-slate-500":"bg-white"} `}>
        <Sidebar/>
        <Outlet/>
    </div>
  )
}

export default Body