import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import './Form.css'
import { Button } from '@mui/material'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'
const Register = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const handleSumbit = () => {
        try {
            if(!name) {
                toast.error("Please enter name")
            }else if(!email){
                toast.error("Please enter email!")
            }else{
                axios
                .post("https://yelp-clone-server.onrender.com/auth/register",{
                    name:name,
                    email:email,
                    password:password
                }).then((res) => {
                    console.log(res);
                    navigate(`/${res.data._id}`)
                }).catch((e) => {
                    console.log(e);
                    toast.error(e.response.data.message)
                })
            }
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <form className='form-classic' onKeyDown={(e) => e.key === 'Enter' ? handleSumbit : 'ok'}>
        <ToastContainer/>
        <h3>Register</h3>
        <TextField onChange={(e) => setName(e.target.value) } label='Enter name' type='text'/>
        <TextField onChange={(e) => setEmail(e.target.value) } label='Enter email' type='email' />
        <TextField onChange={(e) => setPassword(e.target.value) } label='Enter password' type='password'/>
        <Button onClick={handleSumbit}>Sumbit</Button>
        <p>Arleady have any account? <Link to={'/login'}>Login</Link></p>
    </form>
  )
}

export default Register