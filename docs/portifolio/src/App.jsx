import React from 'react'
import './App.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'devicon/devicon.min.css';
import {RouterProvider } from 'react-router-dom'
import router from './router.jsx'


function App() {
 
  return (
    <RouterProvider router={router} />

  )
}

export default App
