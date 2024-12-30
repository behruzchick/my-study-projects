import { useEffect, useState } from 'react'
import bg  from './Images/bg.jpg'
import './App.css'
import axios from 'axios'
import Main from './Components/Main/Main'
import { Route, Routes } from 'react-router-dom'
import Stats from './Components/Stats/Stats'
import LiveScores from './Components/Livescores/LiveScores';
import Rounds from './Components/Rounds/Rounds'
function App() { 
  return (
    <>
    {/* // Background image */}
      <img src={bg} style={{position:"absolute",left:"0px",width:"100%",top:"0px",height:'100%',zIndex:"-1"}}/>
    {/* // */}
      <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/stats' element={<Stats/>}/>
          <Route path='/livescores' element={<LiveScores/>}/>
          <Route path='/rounds' element={<Rounds/>}/>
      </Routes>
    </>
  )
}

export default App
