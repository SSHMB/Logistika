import React from 'react'
import { Outlet } from 'react-router-dom'
import ContactPage from './components/ContactPage'

const App = () => {
  return (
    <div>
      <Outlet />
 <ContactPage />
     </div>
  )
}

export default App
