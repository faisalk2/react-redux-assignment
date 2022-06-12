import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import {addDataApi, getDataApi} from '../store/todo/action';
const Auth = () => {
  const ref=useRef();
  const dispatch=useDispatch();
  const {data,getData,addData}=useSelector((state)=>state.todo);
console.log(data)
useEffect(()=>{
  if(data.length==0)
  {
    dispatch(getDataApi());
  }
},[dispatch])

const handleAdd=()=>{
  let value=ref.current.value;
  if(value!="")
  {
    dispatch(addDataApi(value));
  }
  
}
if(getData.loading) return <h1>Loading...</h1>
if(getData.error) return <h1>somthing went wrong</h1>
  return (
    <div>
      <input ref={ref} type="text"  />
      <button onClick={handleAdd} disabled={addData.loading}>Add</button>
      {data.map((d)=> 
        (<div key={d.id}>
          <h1>{d.title}</h1>
        </div>)
      )}
    </div>
  )
}

export default Auth