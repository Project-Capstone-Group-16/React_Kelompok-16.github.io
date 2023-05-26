import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from '../pages/landingPage/LandingPage'

const RouteManagement = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  )
}

export default RouteManagement