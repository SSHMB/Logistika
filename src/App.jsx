import React from 'react'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Outlet />
 <ContactPage />
     </div>
  )
}

export default App
