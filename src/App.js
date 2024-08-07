import { Routes, Route } from 'react-router-dom'
import Home from './Views/Home'
import Login from './Views/Login'
import Register from './Views/Register'
import Profil from './Views/Profil'
import Messages from './Views/Messages'
import Listing from './Views/Listing'
import CreateListing from './Views/CreateListing'
import ListingsCategory from './Views/ListingsByCategory'
import Search from './Views/Search'
import EditListing from './Views/editListing'

function App() {
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
        <Route path="/modification" element={<EditListing />} />
        <Route path="/categorie/:id" element={<ListingsCategory />} />
      </Routes>
    </div>
  )
}

export default App
