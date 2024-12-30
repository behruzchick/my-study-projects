import React, { useEffect, useState } from 'react'
import Main from '../../Components/HomeComponents/Main/Main'
import Header from '../../Components/HomeComponents/Header/Header'
import axios from 'axios'

const HomePage = () => {
  const [todayWh,setTodayWh] = useState({
    city:"Tashkent",
    date:"Bugun , 30 iyun",
    clear:true,
    cloudy:false,
    celsi:"+36°",
    celsiMin:"+25°",
    namlik:"20%",
    shamol:"Shimoliy, 5.4 m/s",
    bosim:"754 mm sim. ust",
    oy:"Eskiy Oy",
    qoyuosh_chiqishi:"04:52",
    quyosh_botishi:"20:23",
    havo:'Ochiq havo',
    dayli_3st_celsi:[
      {
        time:'tong',
        cloudy:true,
        clear:false,
        celsi:'24°'
      },
      {
        time:'kun',
        cloudy:false,
        clear:true,
        celsi:'37°'
      },
      {
        time:'Oqshom',
        cloudy:true,
        clear:false,
        celsi:'29°'
      },
    ]
  });


  return (
    <div className='home-page'>
        <Header/>
        <Main todayWh={todayWh}/>
    </div>  
  )
}

export default HomePage