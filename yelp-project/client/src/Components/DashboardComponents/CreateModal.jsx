import React, { useState } from 'react'
// import Modal from '@mui/material/Modal';
import { Box, Button, TextField, Modal } from '@mui/material';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import CloseIcon from '@mui/icons-material/Close';
import './Dashboard.css'
const CreateModal = ({ open, setOpen,id }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleCreate = (e) => {
        e.preventDefault();
        if (!title) {
            toast.error("Please enter title")
        } else if (!description) {
            toast.error("Please enter description")
        } else {
            axios.post(`https://yelp-clone-server.onrender.com/post/${id}`, {
                title: title,
                description: description
            }).then((res) => {
                console.log(res);
                toast.success("Successfuly created new restaraunt!")
            }).finally(() => {
                setOpen(false)
            })
        }
    }

    const handleClose = () => {
        setOpen(false);
    }
    return (
        <div>
            <div>
                <ToastContainer />
                <Box>
                    <form className='form-modal'>
                        <div className="form-head">
                            <h3>Create new restaraunt</h3>
                            <CloseIcon onClick={handleClose} style={{cursor:'pointer'}}/>
                        </div>
                        <TextField onChange={(e) => setTitle(e.target.value)} label='Restaraunt name' />
                        <TextField onChange={(e) => setDescription(e.target.value)} label='Restaraunt description' />
                        <Button onClick={handleCreate}>Add</Button>
                    </form>
                </Box>
            </div>
        </div>

    )
}

export default CreateModal