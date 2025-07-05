import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MemuExample from './hookss/MemuExample'
import CallBack from './hookss/CallBack'
import SignIn from './formik&yup/SignIn'
import { Todo } from './todos/Todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <h1>hello</h1> */}
     {/* <MemuExample></MemuExample> */}
     {/* <CallBack></CallBack> */}
     {/* <SignIn></SignIn> */}
     <Todo/>
    </>
  )
}

export default App
