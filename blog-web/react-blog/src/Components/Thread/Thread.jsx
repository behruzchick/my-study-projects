import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Box, Button } from 'react-bulma-components'
import './Thread.css';
import { supabase } from '../../CreateClient';
import { useNavigate } from 'react-router-dom';
const Thread = ({ token }) => {
    const [thTitle, setThTitle] = useState("");
    const [threads, setThreads] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        supabase
            .from('thread')
            .select('*')
            .then((res) => {
                console.log(res);
                setThreads(res.data);
            })
    },[])

    const handleCreate = async () => {
        await supabase
            .from('thread')
            .insert([
                {
                    thread_title: thTitle,
                    // user:token.user,
                    uid: token.user.id
                }
            ])
            .then((res) => {
                console.log(res);
            })

    }
    return (
        <div>
            <Box className='box thread-create-box'>
                <TextField onChange={(e) => setThTitle(e.target.value)} variant='outlined' className='thread-input' label='Create thread...' />
                <Button onClick={handleCreate} className='create-button'>Create</Button>
            </Box>

            <Box className='threads'>
                {
                    threads.map((item) => (
                        <div onClick={() => navigate(`/home/thread/${item.id}`)} style={{display:'flex',justifyContent:"space-between"}} className='thread'>
                            <b>{item.thread_title}</b>
                            <p>{item.created_at}</p>
                        </div>
                    ))
                }
            </Box>
        </div>
    )
}

export default Thread