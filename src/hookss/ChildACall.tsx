import React, { memo } from 'react'

interface Props{
    fun:()=>void
}
const ChildACall = ({fun}:Props) => {
    console.log("calling child component")
    fun()
  return (
    <div>
      
    </div>
  )
}

export default memo(ChildACall)
