// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from './components/menu'


function App() {
  
  return (
    <>
      <Menu/>
      <Outlet/>
    </>
  )
}

export default App
