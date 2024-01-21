import { useState } from 'react'

import './App.css'
import Header from './container/Header/Header'
import Navbar from './components/NavBar/Navbar'

function App() {
 

  return (
    <div className='app'>
      <Navbar />
      <div className='content'>
      <Header/>
      </div>
   
 
    </div>
  )
}

export default App
