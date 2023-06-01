import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ScreenOne from './Compnents/ScreenOne'
import ScreenTwo from './Compnents/ScreenTwo'

const router=createBrowserRouter([
  {
    path:"/",
    element: <ScreenOne></ScreenOne>
  },
  {
    path:"/:id",
    element: <ScreenTwo></ScreenTwo>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
