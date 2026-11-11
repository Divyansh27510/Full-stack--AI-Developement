<<<<<<< HEAD
import React, { useState } from 'react'
=======
import React from 'react'
>>>>>>> a66c9d6a5f18f4d7aa145990e4e876b6711dd15e
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

const App = () => {
<<<<<<< HEAD
  let [searchTerm,setSearchTerm]=useState("");
  let [selectedCategory,setSelectedCategory] = useState("All Products");



  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar 
      searchTerm = {searchTerm}
      setSearchTerm = {setSearchTerm}/>
      <div className='flex'>
        <Sidebar
        selectedCategory = {selectedCategory}
        setSelectedCategory = {setSelectedCategory}/>
        <MainContent 
        searchTerm = {searchTerm}
        selectedCategory = {selectedCategory}/>
=======
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar/>
      <div className='flex'>
        <Sidebar/>
        <MainContent/>
>>>>>>> a66c9d6a5f18f4d7aa145990e4e876b6711dd15e
      </div>
    </div>
  )
}

export default App
