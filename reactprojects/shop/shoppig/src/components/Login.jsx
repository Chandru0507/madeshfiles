import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate =useNavigate();

    let handleNavigate=()=>{
        navigate("/")

    }
  return (
    <div>Login
        <button onClick={ handleNavigate}>Move to home</button>
    </div>
  )
}

export default Login