import React from 'react'
import LandingPage from '../Pages/LandingPage'
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage'
import { Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </div>
  )
}

export default AppRoutes
