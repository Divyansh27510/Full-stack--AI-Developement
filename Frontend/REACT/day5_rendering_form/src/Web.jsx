import React,{useState} from 'react'


const Web = () => {

    let [data , setData] = useState({
        name : "Divyansh singh",

        mob : 8795969171
    })
    console.log(data)

  return (
    <div className='flex flex-col gap-5 w-60'>
      <input type="text"
      onChange={(e) => {
        setData({
            name:e.target.value,
            mob : data.mob
        })
      }} 
      className='border-2'
      placeholder='Enter your name....'/>
      <input type="number"
      onChange={(e) => {
        setData({
            name:data.name,
            mob : e.target.value
        })
      }}
      className='border-2'
      placeholder='Enter your number...'/>
      <h1>Enter your name  : {data.name}</h1>
      <h1>Enter Your Mobile number : {data.mob}</h1>
    </div>
  )
}

export default Web

