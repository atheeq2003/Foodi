import { createRoot } from 'react-dom/client'
import './index.css'
import router from './router/Router.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './contexts/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router = {router} />
  </AuthProvider>,
)
