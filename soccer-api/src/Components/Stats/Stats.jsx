import React, { useEffect, useState } from 'react'
import { Button } from 'react-bulma-components'
import axios from 'axios'
import { Avatar, ImageList } from '@mui/material'
import './Stats.css'
const Stats = () => {
    const [data,setData] = useState([]);
    const [secondData,setSecondData] = useState([]);
    const [state,setState] = useState("secondTeamId");
    useEffect(() => {
        axios
        .get(`https://apiv2.allsportsapi.com/football/?met=H2H&APIkey=99c9638e061c78e8fc36ae1ca9de2cc55450b2cd002caf934837754aa044b127&firstTeamId=94&secondTeamId=4373`)
        .then((res) => {
            console.log(res);
            setData(res.data.result.firstTeamResults);
            setSecondData(res.data.result.secondTeamResults);
        }).catch((e) => {
            console.log(e);
        })
    },[])

   const handleClick = () => {
    setData()
   }
  return (
    <div className='stats-wrappe'>
        <div className="row-1-title" style={{width:"300px"}}>
            <h2>Results</h2>
        </div>
        <div className="row-2-stats-results-wrappe">
            <ImageList className='row-2-wrappe' style={{display:'flex',flexDirection:'column',padding:"30px"}}>
            <h3>First team results</h3>
                {
                    data.map((item,index) => (
                        <div className='match' style={{padding:"15px"}} key={index}>
                            <div className='team-info' style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:"300px",gap:'30px'}}>
                                <div className="home-team" style={{textAlign:"start"}}>
                                    <Avatar src={item.home_team_logo}/>
                                    <b>{item.event_home_team}</b>
                                </div>
                                <div className="match-result">
                                    <b>{item.event_final_result}</b>
                                </div>
                                <div className="away-team" style={{display:"flex",alignItems:'end',flexDirection:'column',textAlign:"start"}}>
                                    <Avatar src={item.away_team_logo}/>
                                    <b>{item.event_away_team}</b>
                                </div>
                            </div>

                            <div className="league_name" style={{width:"200px"}}>
                                <b>{item.league_name}</b>
                            </div>
                            <div className="match-date">
                                <b>{item.event_date}</b>
                            </div>
                        </div>
                    ))
                }
                <h3>Second team results</h3>
                                {
                    secondData.map((item,index) => (
                        <div className='match' style={{padding:"15px"}} key={index}>
                            <div className='team-info' style={{display:'flex',alignItems:'center',justifyContent:'space-between',width:"300px",gap:'30px'}}>
                                <div className="home-team" style={{textAlign:"start"}}>
                                    <Avatar src={item.home_team_logo}/>
                                    <b>{item.event_home_team}</b>
                                </div>
                                <div className="match-result">
                                    <b>{item.event_final_result}</b>
                                </div>
                                <div className="away-team" style={{display:"flex",alignItems:'end',flexDirection:'column',textAlign:"start"}}>
                                    <Avatar src={item.away_team_logo}/>
                                    <b>{item.event_away_team}</b>
                                </div>
                            </div>

                            <div className="league_name" style={{width:"200px"}}>
                                <b>{item.league_name}</b>
                            </div>
                            <div className="match-date">
                                <b>{item.event_date}</b>
                            </div>
                        </div>
                    ))
                }
            </ImageList>
        </div>
    </div>
  )
}

export default Stats