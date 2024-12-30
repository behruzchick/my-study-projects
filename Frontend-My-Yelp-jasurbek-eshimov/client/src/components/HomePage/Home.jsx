import React from 'react'
import '../RestatauntTable/Restarauns.css'
import { Link, useParams } from 'react-router-dom'
import { Restarauns } from '../RestatauntTable/Restarauns';
export const Home = () => {
   const data = useParams()
  return (

  <>   
   <div className='home_wrape'style={{height:'100vh'}}>

      <div className="btns_group" style={{display:'flex',flexDirection:"column"}}>
          <Link to={'/login'} className='logogut_btn'>Logout</Link>
          <Link to={`/create/${data.id}`} className='logogut_btn create__btn'>Add new restaraunt</Link>
      </div>

      <Restarauns/>
    </div>
  </>

  )
}
