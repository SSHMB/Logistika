import React from 'react'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from './AuthProvider.jsx'
const App = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  )
}

export default App
