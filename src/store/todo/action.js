// http://localhost:8080/todo

import axios from "axios"
import { ADD_DATA_ERROR, GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./type"

export const addDataApi=(payload)=>(dispatch)=>{
    dispatch({type:GET_DATA_LOADING});
    axios.post("http://localhost:8080/todo",{
        title:payload,
        isCompleted:false,
    }).then(res=>dispatch({type:GET_DATA_SUCCESS,payload:res.data})).catch(err=>dispatch({type:ADD_DATA_ERROR}))

}

export const getDataApi=()=>(dispatch)=>{
    dispatch({type:GET_DATA_LOADING});
    axios.get("http://localhost:8080/todo")
    .then(res=>dispatch({type:GET_DATA_SUCCESS,payload:res.data}))
    .catch(err=>dispatch({type:GET_DATA_ERROR}))
}