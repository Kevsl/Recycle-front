import { Routes, Route } from 'react-router-dom'
import Home from './Views/Home/Home'
import Login from './Views/Login/Login'
import Register from './Views/Register/Register'
import Profil from './Views/Profil/Profil'

import { Navigate } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Login />} />
        <Route path="/inscription" element={<Register />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </div>
  )
}

export default App
