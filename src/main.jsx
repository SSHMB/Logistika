import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import Login from './Pages/Login.jsx'
import Home from './Pages/Home.jsx'
import AdminPage from './Pages/AdminPage.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import ContactPage from "./Pages/ContactPage.jsx"
import RealEstatePage from './Pages/RealEstatePage.jsx'
import PropertyCard from './Pages/PropertyCard.jsx'
import LocationDetail from './Pages/LocationDetail.jsx'
import FeaturedHouseDetail from './Pages/FeaturedHouseDetail.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: "/realestatepage",
        element: <RealEstatePage />
      },
      {
        path: 'property/:id',
        element: <PropertyCard />
      },
      {
        path: 'location/:id',
        element: <LocationDetail />
      },
      {
        path: 'featured-house/:id',
        element: <FeaturedHouseDetail />
      },
      {
        path: 'admin',
        element: (
          <ProtectedRoute>
            <AdminPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
