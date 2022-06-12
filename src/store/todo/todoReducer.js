import { ADD_DATA,  ADD_DATA_ERROR,  ADD_DATA_LOADING,  ADD_DATA_SUCCESS,  GET_DATA_ERROR, GET_DATA_LOADING, GET_DATA_SUCCESS } from "./type";
let init={
    addData:{
        loading:false,
        error:false,
    },
    getData:{
        loading:false,
        error:false
    },
    data:[]
}
export const todoReducer=(state=init,{type,payload})=>{
switch(type){
    case ADD_DATA_SUCCESS:{
        return {...state,addData:{...state.addData,loading:false},data:payload}
    }
    case ADD_DATA_LOADING:{
        return {...state,addData:{...state.addData,loading:true}}
    }
    case ADD_DATA_ERROR:{
        return {...state,addData:{...state.addData,error:true}}
    }
    case GET_DATA_SUCCESS:{
        return {...state,getData:{...state.getData,loading:false},data:payload}
    }
    case GET_DATA_LOADING:{
        return {...state,getData:{...state.getData,loading:true}}
    }
    case GET_DATA_ERROR:{
        return {...state,getData:{...state.getData,loading:false,error:true}}
    }
    default:{
        return state;
    }
}
}