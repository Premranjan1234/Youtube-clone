import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const darkMode=useSelector((store)=>store.app.darkMode)
  return (
    <div className={`${darkMode?"bg-slate-500":"bg-white"}`}>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainContainer