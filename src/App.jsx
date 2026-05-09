import React from 'react'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from './AuthProvider.jsx'
import Navbar from "./navbar.jsx" 
const App = () => {
  return (
    <AuthProvider>
      <Navbar />
      <Outlet />
    </AuthProvider>
  )
}

export default App
