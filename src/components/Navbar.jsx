import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { logout } from '../store/authentication/action';

const Navbar = () => {
 let navigate=useNavigate();
    const {isAuth}=useSelector((state)=>state.auth);
    const dispatch=useDispatch()
    const handleLogout=()=>{
    dispatch(logout());
    }
    useEffect(()=>{
      if(!isAuth)  navigate("/");
    },[isAuth])
  return (
    <div>
        <Link to='/'>Home</Link>
       {isAuth ? <Link to='todo'>Todo</Link>:""} 
        
        <button onClick={handleLogout}>{isAuth ? "LogOut":"Login"}</button>
    </div>
  )
}

export default Navbar