import React from 'react'

const Sidebar = () => {
  return (
    <aside className='w-60 min-h-screen bg-white border-r border-slate-300 p-6'>
        <h2 className='text-lg font-bold text-slate-800 mb-6'>Categories</h2>
        <ul className='space-y-3 text-slate-600'>
            <li>All Products</li>
            <li>Mens's Clothing</li>
            <li>Women's Clothing</li>
            <li>Electronics</li>
            <li>Jwellery</li>
        </ul>
    </aside>
  )
}

export default Sidebar
