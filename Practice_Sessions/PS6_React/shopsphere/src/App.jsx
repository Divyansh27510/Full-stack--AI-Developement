import React from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar/>
      <div className='flex'>
        <Sidebar/>
        <MainContent/>
      </div>
    </div>
  )
}

export default App
