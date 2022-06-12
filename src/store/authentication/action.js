import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./type"
import axios from "axios"
export const login_auth=(payload)=>(dispatch)=>{
dispatch({type:LOGIN_LOADING});

axios.post("https://reqres.in/api/login",payload)
.then(res=>dispatch({type:LOGIN_SUCCESS,payload:res.data}))
.catch(err=>dispatch({type:LOGIN_ERROR}));
}

export const logout=()=>(dispatch)=>{
    dispatch({type:LOGOUT})
}