import React from 'react'
import './Form.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='form-container'>
        <h1>Sign in</h1>
        <form className='form'>
            <label style={{display:"flex",flexDirection:"column"}}>
                Email:
                <input type="email"  className='form-input'/>
                <b className='error-txt'>Error</b>
            </label>
            <label style={{display:"flex",flexDirection:"column"}}>
                Password:
                <input type="password" className='form-input'/>
                <b className='error-txt'>Error</b>
            </label>
        </form>
        <button className='form-btn'>Sign up</button>
        <p>Don't have any account? <Link to={'/auth/register'}>Register</Link></p>
    </div>
  )
}

export default Login