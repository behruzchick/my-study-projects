import { useEffect, useState } from 'react'
import './App.css'
import { supabase } from './CreateClient'
import { Route, Routes, json } from 'react-router-dom';
import Register from './Components/AuthComponents/Register';
import Login from './Components/AuthComponents/Login';
import 'react-toastify/dist/ReactToastify.css';
import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import PostInfo from './Components/Main/PostInfo/PostInfo';
import Comments from './Components/Main/Comments/Comments';
import Thread from './Components/Thread/Thread';
import Th from './Components/Thread/Th';
function App() {
  const [token,setToken] = useState(false);

  if(token){
      sessionStorage.setItem('token',JSON.stringify(token))
  }
  useEffect(() => {
    if(sessionStorage.getItem('token')){
      let data = JSON.parse(sessionStorage.getItem('token'))
      setToken(data)
    }
  }, [])
  return (
    <>
    <Header token={token}/>
      <Routes>
          <Route path='/register' element={<Register setToken={setToken}/>}/>
          <Route path='/login' element={<Login setToken={setToken}/>}/>
          <Route path='/' element={<Main token={token}/>}/>
          <Route path='/home/post/:id' element={<PostInfo token={token}/>}/>
          <Route path='/home/thread' element={<Thread token={token}/>}/>
          <Route path='/home/thread/:id' element={<Th token={token}/>}/>
          <Route path='/home/post/comments/:id' element={<Comments token={token}/>}/>
      </Routes>
    </>
  )
}

export default App
