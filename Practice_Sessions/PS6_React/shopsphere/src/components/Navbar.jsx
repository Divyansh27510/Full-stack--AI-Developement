import React from 'react'

<<<<<<< HEAD
const Navbar = ({searchTerm,setSearchTerm}) => {
=======
const Navbar = () => {
>>>>>>> a66c9d6a5f18f4d7aa145990e4e876b6711dd15e
  return (
    <div>
      <nav className='flex justify-between items-center px-8 py-2 bg-white border-b border-slate-300 text-violet-700'>
        <h1 className='text-2xl font-bold'>ShopSphere</h1>
        <input type="text" 
        placeholder='Search Products...'
<<<<<<< HEAD
        value = {searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
=======
>>>>>>> a66c9d6a5f18f4d7aa145990e4e876b6711dd15e
        className='border border-slate-300 rounded-lg px-4 py-4 w-80' />
        <div className='font-semibold'>
            Cart (0)
        </div>
      </nav>
    </div>
  )
}

export default Navbar
