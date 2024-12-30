import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './Round.css'
import { ImageList } from '@mui/material'
const Rounds = () => {
  const [videos,setVidoes] = useState([]);
  // p3YrW0FRvMqVQY3eE5RWmYRF9Yuk4PxuGsArpCQdwcROGm6frRHAeFnv9TlJ  
  useEffect(() => {
    axios
    .get(`https://apiv2.allsportsapi.com/football/?&met=Probabilities&&matchId=86393&APIkey=99c9638e061c78e8fc36ae1ca9de2cc55450b2cd002caf934837754aa044b127`)
    .then((res) => {
      console.log(res);
      // setVidoes(res.data.result);
    }).catch((e) => {
      console.log(e);
    })
  },[])
  return (
    <div className='videos-wrappe'>
      {/* <ImageList className='row-2-wrappe'>
        {
           videos.map((video) => (
            <iframe src={video.video_url} />
           ))
        }
      </ImageList> */}
    </div>
  )
}

export default Rounds