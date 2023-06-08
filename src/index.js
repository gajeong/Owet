import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import {
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'
import Home from './pages/Home/Home'
import ProductPage from './pages/Product/ProductPage'
import LoginPage from './pages/Login/LoginPage'
import NotFoundPage from './pages/NotFound/NotFoundPage'
import MyPage from './pages/MyPage/MyPage'
import NewProductPage from './pages/NewProduct/NewProductPage'
import ProtectedRoute from './pages/ProtectedRoute'
const root = ReactDOM.createRoot(
  document.getElementById('root')
)
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'category/:sort',
        element: <ProductPage />,
      },
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'mypage',
        element: <MyPage />,
      },
      {
        path: 'products/new',
        element: (
          <ProtectedRoute requireAdmin>
            <NewProductPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
])
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

reportWebVitals()
