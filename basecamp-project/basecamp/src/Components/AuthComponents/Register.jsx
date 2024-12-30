import React, { useState } from 'react'
import './Form.css'
import { Link } from 'react-router-dom'
import { register } from '../../Actions/AuthActions/Auth'
const Register = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [cPassoword,setCPassword] = useState("");
    const handleSumbit = () => {
        try {
            register(email,password);
        } catch (error) {
            console.log(error);
        }
    }
  return (
    <div className='form-container'>
    <h1>Sign up</h1>
    <form className='form'>
        <label style={{display:"flex",flexDirection:"column"}}>
            Email:
            <input onChange={(e) => setEmail(e.target.value)} type="text"  className='form-input'/>
            <b className='error-txt'>Error</b>

        </label>

        <label style={{display:"flex",flexDirection:"column"}}>
            Password:
            <input onChange={(e) => setPassword(e.target.value)} type="passowrd" className='form-input'/>
            <b className='error-txt'>Error</b>

        </label>

        <label style={{display:"flex",flexDirection:"column"}}>
            Confirm password:
            <input onChange={(e) => setCPassword(e.target.value)} type="password" className='form-input'/>
            <b className='error-txt'>Error</b>

        </label>
    </form>
    <button onClick={handleSumbit} className='form-btn'>Sign up</button>
    <p>Arleady member? <Link to={'/auth/login'}>Login</Link></p>
</div>
  )
}

export default Register