import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Register from './pages/Register'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'

const defaultRoute = () => {
  const authData = JOSN.parse(localStorage.getItem('authData'));
  if (authData){
    return <Navigate to="/login" replace/>
  }
  return <Navigate to="/register" replace/>
}

function App() {
  const route = createBrowserRouter([
    {
       path: "/",
      element: <defaultRoute />
    },
    {

      path: "/login",
      element: <Login />
    },
     {

      path: "/Dashboard",
      element: <Dashboard />
    },
    {
      path: "/register",
      element: <Register />
    }
  ])

  return <RouterProvider router={route}>

  </RouterProvider>
}

export default App
