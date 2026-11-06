import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between items-center px-8 py-2 bg-white border-b border-slate-300 text-violet-700'>
        <h1 className='text-2xl font-bold'>ShopSphere</h1>
        <input type="text" 
        placeholder='Search Products...'
        className='border border-slate-300 rounded-lg px-4 py-4 w-80' />
        <div className='font-semibold'>
            Cart (0)
        </div>
      </nav>
    </div>
  )
}

export default Navbar
