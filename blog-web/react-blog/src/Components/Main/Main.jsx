import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import { supabase } from '../../CreateClient';
import MainPosts from './MainPosts/MainPosts';
const Main = ({token}) => {
  const [posts,setPosts] = useState([]);

useEffect(() => {
  supabase.from('post')
  .select('*')
  .then((res) => {
    console.log(res);
    setPosts(res);
  })
},[]);
  return (
    <div>
      <MainPosts posts={posts}/>
    </div>
  )
}

export default Main