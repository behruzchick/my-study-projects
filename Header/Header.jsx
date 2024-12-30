import React, { useEffect } from 'react'
import { AppBar, Box, Drawer, Toolbar } from '@mui/material'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Menu from './Menu';
import './Header.css'
import friday from '../../assets/friday-wh.png'
const Header = ({clicked,setClicked,open,setOpen}) => {
    // const [open, setOpen] = React.useState(false);
    // const [clicked,setClicked] = React.useState(false);
    return (
        <AppBar sx={{ background: "none",boxShadow:'none' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: "space-between" }} component="nav">
                <div className="brand">
                    <a href="/"><img className='brand-logo' src={friday}/></a>
                </div>
                <div className="menu-btn" onMouseMove={() => setOpen(true)}>
                    {
                        open ?
                        null
                        :
                        <ArrowBackIosIcon onMouseMove={() => setOpen(true)} sx={{ cursor: "pointer",position:"absolute",top:"20px",right:"10px"}}/>
                    }
                </div>
                <Drawer
                    className='drawer'
                    sx={{
                        width: 480,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                          width: 350,
                          background:"none",
                          border:'none',
                          transition:"0.5s"
                        },
                        transition:'0.3s',
                      }}
                    variant={'persistent' }
                    anchor='right'
                    open={open} 
                >
                    <Menu  setOpen={setOpen} clicked={clicked} setClicked={setClicked} open={open} />
                </Drawer>
            </Toolbar>
        </AppBar>
    )
}

export default Header