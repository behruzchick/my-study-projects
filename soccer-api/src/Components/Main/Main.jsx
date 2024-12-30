import React from 'react'
import bg from '../../Images/bg.jpg';
import { Button, Form } from 'react-bulma-components';
import './Main.css'
import { useNavigate } from 'react-router-dom';
const Main = () => {
    const navigate = useNavigate();
  return (
    <div>
        {/* <img src={bg} style={{position:"absolute",left:"0px",width:"100%",top:"0px",height:'100%',zIndex:"-1"}}/> */}
        <div className="choose_btns" style={{display:'flex',alignItems:'center',gap:"30px",flexDirection:'column'}}>
            <div className="search-input">
                <Form.Input className='search-input' placeholder='Search...'/>
            </div>
            <div className="btns">
                <Button onClick={() => navigate(`/stats`)} className='btn'>STATISTICS</Button>
                <Button onClick={() => navigate(`/livescores`)} className='btn'>LIVESCORES</Button>
                <Button onClick={() => navigate(`/rounds`)} className='btn'>VIDEOS</Button>
            </div>
        </div>
    </div>
  )
}

export default Main