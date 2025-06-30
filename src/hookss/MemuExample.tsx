import React, { useMemo, useState } from 'react'

const MemuExample = () => {
    const [count,setcount]=useState(0);
    const [active,setactive]=useState(true);
    const double=useMemo(()=>{
        console.log("calculating double.............1")
        return count*2;
    },[count])
    const double2=()=>{
        console.log("calculating double.............2")
        return count*2;
    }
  return (
    <>
      <h1>use memo</h1>
      <h1>memo double1: {double}</h1>
      <h1>memo double2: {double2()}</h1>
      <h1>status: {active?"active":"not active"}</h1>
      <button onClick={()=>setcount(prev=>prev+1)}>make double</button>
      <button onClick={()=>setactive(!active)}>toggle</button>
    </>
  )
}

export default MemuExample
