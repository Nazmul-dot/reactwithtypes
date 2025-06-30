import React, { useCallback, useState } from 'react'
import ChildACall from './ChildACall';

const CallBack = () => {
    const[add,setadd]=useState(0);
    const[count,setcount]=useState(0);

    const fun=()=>{
        console.log("1fun function")
    }

    const fun2=useCallback(()=>{
         console.log("2fun function"+count)
    },[count])
  return (
    <>
    <button onClick={()=>setadd(prev=>prev+2)}>add</button>
    <h1>adding : {add}</h1>

    <ChildACall fun={fun2} ></ChildACall>

    <button onClick={()=>setcount(prev=>prev+1)}>count</button>
    <h1>counting : {count}</h1>
      
    </>
  )
}

export default CallBack
