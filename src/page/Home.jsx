import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { login_auth } from '../store/authentication/action';

const Home = () => {

const [input,setInput]=useState(
    {
        email: "eve.holt@reqres.in",
        password:'cityslicka'
    }
)
const dispatch=useDispatch();
 const {isAuth,loading,error}=useSelector((state)=>state.auth)
const handleChange=(e)=>{
    const {name,value}=e.target;
    setInput({
[name]:value
    })
}

 const handleSubmit=(e)=>{
e.preventDefault();
dispatch(login_auth(input))
}


if(loading) return <div>Loading...</div>
if(error) return <div>somthing went wrong</div>

if(isAuth) return <Navigate to='/todo'></Navigate>
  return (
    <div>
        <form onSubmit={handleSubmit} >
            <input type="email" name="email" value={input.email} placeholder="enter email" onChange={handleChange} />
            <input type="password" name="password" value={input.password} placeholder="enter password0" onChange={handleChange} />
            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default Home