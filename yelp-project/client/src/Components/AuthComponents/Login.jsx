import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import './Form.css'
import { Button } from '@mui/material'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    const handleSumbit = () => {
        try {
            if(!email){
                toast.error("Please enter email!")
            }else{
                axios
                .post("https://yelp-clone-server.onrender.com/auth/login",{
                    email:email,
                    password:password
                }).then((res) => {
                    toast.success("Successfuly logined to account!")
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
        <h3>Login to account</h3>
        <TextField onChange={(e) => setEmail(e.target.value) } label='Enter email' type='email' />
        <TextField onChange={(e) => setPassword(e.target.value) } label='Enter password' type='password'/>
        <Button onClick={handleSumbit}>Login</Button>
        <p>Arleady have any account? <Link to={'/login'}>Login</Link></p>
    </form>
  )
}

export default Login