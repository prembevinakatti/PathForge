import React from 'react'
import LandingPage from '../Pages/LandingPage'
import LoginPage from '../Pages/LoginPage'
import RegisterPage from '../Pages/RegisterPage'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import ResultPage from '../Pages/ResultPage'

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
              <Route path="/result" element={<ResultPage/>}/>
      </Routes>
    </div>
  )
}

export default AppRoutes
