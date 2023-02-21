import { Routes, Route } from 'react-router-dom'
import Home from './Views/Home'
import Login from './Views/Login'
import Register from './Views/Register'
import Profil from './Views/Profil'
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import Messages from './Views/Messages'
import Listing from './Views/Listing'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (!token) {
      navigate('/connexion')
    }
  }, [])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<Register />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/listing" element={<Listing />} />
      </Routes>
    </div>
  )
}

export default App
