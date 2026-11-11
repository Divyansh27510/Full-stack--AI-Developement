import React,{useState} from 'react'

const Register = ({setToggle,setUser}) => {
    let [formData,setFormData] =  useState({
        name:"Divyansh Singh",
        email : "divyanshsingh879596@gmail.com",
        password : "123456789"
    })



    

    // console.log(users)
    const handleChange = (e)=>{
        let {name,value} = e.target;
        setFormData({...formData,[name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted")
        
        setUser(prev => [...prev,formData])
        
    }
    
  return (
    <div className='bg-white w-90 p-6 rounded-xl flex flex-col gap-4'>
        <h1>Register</h1>
      <form
      onSubmit={handleSubmit} action="" className='flex flex-col gap-4'>
        <input 
        required
        value={formData.name}
        onChange={handleChange} type="text"
        name='name' placeholder='Enter your Name'  className='p-2 border border-gray-400 rounded'/>
        <input
        required
        name='email'
        value={formData.email}
        onChange={handleChange} type="text" placeholder='Enter your Email'  className='p-2 border border-gray-400 rounded'/>
        <input
        required
        value={formData.password}
        name='password'
        onChange={handleChange} type="text" placeholder='Enter your Password' className='p-2 border border-gray-400 rounded'/>

        <button className='p-2 bg-blue-600 text-white rounded cursor-pointer'>Register now</button>

      </form>
      
      <p>Already have account
        <span className='text-blue-600 cursor-pointer'
        onClick={()=>setToggle(true)}> Login Here
        </span ></p>
    </div>
  )
}

export default Register
