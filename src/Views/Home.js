import { Header } from '../Components/Layouts/Header'
import { Ads } from '../Components/Layouts/Ads'
import { Footer } from '../Components/Layouts/Footer'
import { Categories } from '../Components/Layouts/Categories'
import homeHeader from '../Assets/images/homeHeader.png'
import { SocialNetworks } from '../Components/Layouts/SocialNetworks'
import { useNavigate } from 'react-router-dom'
import { FooterMenu } from '../Components/Layouts/FooterMenu'
import React, { useState, useEffect } from 'react'
import { getListings } from '../Service/listingService'

const Home = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [listings, setListings] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    getListings().then((res) => {
      setIsLoading(false)
      setListings(res)
    })
  }, [])

  return (
    <div className="font-Baloo">
      <Header />
      <h1 className="text-dark-blue absolute top-48 text-xl ml-14 md:text-2xl md:top-28 ">
        Partager, recevoir, préserver...
      </h1>
      <img
        src={homeHeader}
        alt="Recycle l appli de don entre particuliers "
        className="mt-4  w-screen"
      />
      <div>
        <Categories />
      </div>

      <div className="w-full bg-black-opacity-50 mx-auto  h-px rounded-xl"></div>
      <div className="flex items-center justify-center my-6">
        <button
          className="text-green-recycle border border-green-recycle bg-white w-48 text-center h-12 py-auto rounded-lg"
          onClick={() => {
            navigate('/recherche')
          }}
          aria-label="Rechercher l'annonce"
        >
          Recherche d'annonces
        </button>
      </div>
      <div>
        {listings && (
          <Ads
            listings={listings}
            isLoading={isLoading}
            title="Toutes nos Annonces"
          />
        )}
      </div>
      <div className="w-5/6 bg-black-opacity-50 mx-auto  h-px rounded-xl"></div>

      <div className="w-5/6 bg-black-opacity-50 mx-auto  h-px rounded-xl"></div>
      <SocialNetworks />
      <div className="w-5/6 bg-black-opacity-50 mx-auto  h-px rounded-xl"></div>

      <Footer />
      <FooterMenu />
    </div>
  )
}
export default Home
