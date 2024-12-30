import axios from 'axios'
import React, { useEffect } from 'react'

const LiveScores = () => {


  useEffect(() => {
    axios
    .get(`https://apiv2.allsportsapi.com/football/?met=Standings&APIkey=99c9638e061c78e8fc36ae1ca9de2cc55450b2cd002caf934837754aa044b127&leagueId=20`)
    .then((res) => {
      console.log(res);
    }).catch((e) => {
      console.log(e);
    })
  }, [])


  return (
    <div>LiveScores</div>
  )
}

export default LiveScores