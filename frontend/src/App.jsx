import React from 'react'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Skills from './Component/Skills'
import Education from './Component/Education'
import Contact from './Component/Contact'
import './App.css'

function App() {
  return (
    <div className='AppContainer'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Contact />
    </div>
  )
}

export default App
