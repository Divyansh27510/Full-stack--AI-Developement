import React from 'react'
import { useState } from 'react'

const App = () => {
  let [count ,setCount]  = useState(0)
  let [user,setUser] = useState({
    name:"Divyansh"
  })
  let [inc,setInc] = useState(0)

  return (
    <div>
      <h1>Count is : {count}</h1>
      <h1>Name is : {user.name}</h1>
      <h1>Inc - {inc}</h1>
      <button onClick={()=>{
        setCount(count+1)
      }}>Set Count</button>
      <button onClick={()=>{
        user.name = "Divyansh Singh"
      //  setUser(user.name = "Divyansh Singh")
      }}>Set user</button>
      <button onClick={()=>{
        setInc(inc+1)
      }}>Inc</button>
    </div>
  )
}

export default App

