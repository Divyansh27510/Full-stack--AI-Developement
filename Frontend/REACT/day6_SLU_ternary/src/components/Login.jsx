import React, { useState } from 'react'

const Login = ({setToggle}) => {
    let [formData,setFormdata] =  useState({})
    function handleChange(e){
        let {name,value} = e.target;
        setFormdata({...formData , [name]:value})
    }

    let handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData)
    }
  return (
    <div className='bg-white w-90 p-6 rounded-xl flex flex-col gap-4'>
        <h1>Login</h1>
      <form 
      onSubmit={handleSubmit} action="" className='flex flex-col gap-4'>
        <input 

        name='email'
        onChange={ 
            handleChange} type="text" placeholder='Enter your Email'  className='p-2 border border-gray-400 rounded'/>
        <input 
        onChange={handleChange}
        name='password'
        type="text" placeholder='Enter your Password' className='p-2 border border-gray-400 rounded'/>

        <button className='p-2 bg-blue-600 text-white rounded cursor-pointer'>Login now</button>
      </form>
      
      <p>Don't have account 
        <span className='text-blue-600 cursor-pointer'
        onClick={()=>setToggle(false)} > Register Here
        </span></p>
    </div>
  )
}

export default Login
