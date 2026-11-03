import React, { useState } from 'react'
import Contact from "./Components/Contact"
import Navbar from "./Navbar"
import Hero from "./Components/Hero"
import Footer from "./Components/Footer"


const App = () => {
  let [count,setCount] = useState(0)
  let [flag,setFlag] = useState(true)
  console.log(flag)
  console.log(count)
  return (
    <div>
      <h1>Count is - {count}</h1>
      <button onClick={()=>{
        setCount(count)
      }}>Increment</button>

      <button onClick={()=>{
        setFlag(false)
      }}>FLAG(T/F)</button>
    </div>
  )
}



export default App
