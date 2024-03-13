import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux'
import VideoResults from './VideoResults'

const MainContainer = () => {
  const darkMode=useSelector((store)=>store.app.darkMode)
  const resultpage=useSelector((store)=>store.app.results)
  return (
    <div>
    {resultpage?<VideoResults/>:
    <div className={` ${darkMode?"bg-slate-500":"bg-white"}`}>
        <ButtonList/>
        <VideoContainer/>
    </div>
    }
    </div>
  )
}

export default MainContainer