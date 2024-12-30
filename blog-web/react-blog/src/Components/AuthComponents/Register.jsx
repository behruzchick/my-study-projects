import React, { useState } from 'react'
import { Form, Heading } from 'react-bulma-components'
import {TextField,Button} from '@mui/material'
import { ToastContainer, toast } from 'react-toastify';
import { register } from '../../Func/Auth/Auth';
import { useNavigate } from 'react-router-dom';
const Register = ({setToken}) => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [cPassword,setCPassword] = useState("");
    const [loading,setLoading] = useState(false);
    const navigate  = useNavigate();
    function sumbit(e){
        // setLoading(true);
        e.preventDefault();
        if(!name || !password || !cPassword || !email){
            toast.error("Please enter all fields!")
        }
        else if(password.length < 6){
            toast.error("Password should be at least 6 characters.")
        }
        else if(cPassword !== password){
            toast.error("Password not confirmed!")
        }
        else{
            register(email,password,name,setLoading,setToken,navigate);
        }
    }
  return (
    <Form.Control  style={{margin:"100px auto",background:"#fff",display:"flex",flexDirection:'column',alignItems:'center',gap:"30px",width:"500px",borderRadius:"20px",padding:"30px"}}>
        <ToastContainer/>
        <Heading>Register now</Heading>
        <TextField onChange={(e) => setName(e.target.value)} label='Name'/>
        <TextField onChange={(e) => setEmail(e.target.value)} type='email' label='E-mail'/>
        <TextField onChange={(e) => setPassword(e.target.value)} type='password' label='Password'/>
        <TextField onChange={(e) => setCPassword(e.target.value)} type='password' label='Confirm password'/>
        <Button onClick={sumbit} variant='contained' disabled={loading == true}>
            {
                loading ? 
                "Loading..."
                :"Sumbit"
            }
        </Button>
    </Form.Control>
  )
}

export default Register