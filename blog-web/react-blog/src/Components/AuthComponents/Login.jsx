import React, { useState } from 'react'
import { Form, Heading } from 'react-bulma-components'
import {TextField,Button} from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import { login } from '../../Func/Auth/Auth';
import { useNavigate } from 'react-router-dom';

const Login = ({setToken}) => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    function sumbit(e){
        e.preventDefault();
        if(!password || !email){
            toast.error("Please enter all fields!")
        }
        else if(password.length < 6){
            toast.error("Password should be at least 6 characters.")
        }
        else{
            login(email,password,navigate,setToken);
        }
    }
  return (
    <Form.Control  style={{margin:"100px auto",background:"#fff",display:"flex",flexDirection:'column',alignItems:'center',gap:"30px",width:"500px",borderRadius:"20px",padding:"30px"}}>
        <ToastContainer/>
    <Heading>Sign in to account</Heading>
        <TextField onChange={(e) => setEmail(e.target.value)} type='email' label='E-mail'/>
        <TextField onChange={(e) => setPassword(e.target.value)} type='password' label='Password'/>
        <Button onClick={sumbit} variant='contained'>Sumbit</Button>
    </Form.Control>
  )
}

export default Login