import { Routes, Route, useNavigate } from 'react-router-dom'
import Home from './Views/Home'
import Login from './Views/Login'
import Register from './Views/Register'
import Profil from './Views/Profil'
import React, { useEffect } from 'react'
import Messages from './Views/Messages'
import Listing from './Views/Listing'
import CreateListing from './Views/CreateListing'
import ListingsCategory from './Views/ListingsByCategory'
import Search from './Views/Search'

function App() {
  const navigate = useNavigate()

  useEffect(() => {
    let token = localStorage.getItem('token')
    if (!token) {
      navigate('/connexion')
    }
  }, [navigate])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<Register />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/creation" element={<CreateListing />} />
        <Route path="/recherche" element={<Search />} />

        <Route path="/categorie/:id" element={<ListingsCategory />} />
      </Routes>
    </div>
  )
}

export default App
