import { Avatar, Divider, ImageList, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@react-three/drei'
import React, { useEffect, useRef, useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { deepPurple } from '@mui/material/colors';
import './Menu.css'
const Menu = ({ open, setOpen, setClicked, clicked }) => {
  const listRef = useRef(null);
  const [e,setE] = useState(false);
  const messages = [
    {
      aiMessage: "Hello , i'm FRIDAY"
    }
  ]
  const handleLeaveMouse = () => {
    console.log("leaved");
    if (!clicked) {
      setOpen(false);
    }
  }
  const handleCLoseBtn = () => {
    // if (clicked) {
      setOpen(false);
      setClicked(false);
    // }
  }
  useEffect(() => {
    if(e){
      handleCLoseBtn();
    }
  } ,[open,e])
  const handleClick = () => {

    setClicked(true);
    setOpen(true);
  }
  return (
    <Box sx={{ width: 100 }} className='drawer-wrape'>
      <List red={listRef} className='drawer-list' style={{ padding: '0px', margin: '0px' }} onClick={handleClick} onMouseLeave={clicked == false ? handleLeaveMouse : null}>
        <div className="dwarer-header">
          {/* <div className="arrow-back-btn">
            <ArrowForwardIosIcon onClick={() => setE(true)} sx={{ color: 'white' ,fontSize:"18px",marginLeft:"10px",cursor:"pointer"}} />
          </div> */}
          <div className="user-rad">
            <Avatar className='user-avatar' sx={{ bgcolor: deepPurple[500],width:36,height:36 ,marginRight:'10px'}}>A</Avatar>
          </div>
        </div>
        <ImageList sx={{ width: "100%" }} className='chat-scroll' cols={1}>
          <div className="drawer-chat">
            <div className="ai-message">
              <span>Hello i'm Friday</span>
            </div>
            <div className="user-message">
              <span>Hello, FRIDAY. Can you tell me the weather forecast for today?</span>
            </div>
            <div className="ai-message">
              <span>

                Sure, here is the weather forecast for Tashkent:
                There is a very high chance of rain starting at 5pm and lasting through the night.

                The high temperature will be around 72 degrees Celsius (22 degrees Celsius).

                The wind will be southwesterly at 16 kilometers per hour.

                The UV index is moderate at 4 and won't increase today.
                It will feel between 15 and 22 degrees Celsius due to the wind.
              </span>
            </div>
          </div>
        </ImageList>
        <div className="chat-text-field">
            <input type="text" className='drawer-field' />
        </div>
      </List>
    </Box>
  )
}

export default Menu