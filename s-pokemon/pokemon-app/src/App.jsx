import { useState } from 'react'
import './App.css'
import {Routes,Route} from 'react-router-dom'
import Home from './Components/Home/Home'
import Pokemon from './Components/Pokemon/Pokemon'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/pokemon/:name' element={<Pokemon/>}/>
      </Routes>
    </>
  )
}

export default App
