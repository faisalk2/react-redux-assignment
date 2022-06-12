import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, LOGOUT } from "./type"
let token=localStorage.getItem("token");
let init={
    loading:false,
    error:false,
    isAuth:!!token,
    token:token
   
}


export const authReducer=(state=init,{type,payload})=>{
switch(type){
    case LOGIN_LOADING:{
        return {...state,loading:true}
    }
    case LOGIN_SUCCESS:{
        localStorage.setItem("token",payload);
        return {...state,isAuth:true,loading:false,error:false,token:payload}
    }
    case LOGIN_ERROR:{
        return {...state,loading:false,error:true}
    }
    case LOGOUT:{
        localStorage.removeItem("token");
        return {...state,isAuth:false}
    }
    default:{
        return state
    }
}
}