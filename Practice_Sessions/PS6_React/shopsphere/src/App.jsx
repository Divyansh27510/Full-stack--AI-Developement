import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

const App = () => {
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
      </div>
    </div>
  )
}

export default App
