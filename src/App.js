import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home'
import Profile from './profile'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}