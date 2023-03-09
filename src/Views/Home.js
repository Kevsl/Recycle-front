import { Header } from '../Components/Layouts/Header'
import { Ads } from '../Components/Layouts/Ads'
import { Footer } from '../Components/Layouts/Footer'
import { Categories } from '../Components/Layouts/Categories'
import homeHeader from '../Assets/images/homeHeader.png'
import { SocialNetworks } from '../Components/SocialNetworks'
import { useNavigate } from 'react-router-dom'
import { FooterMenu } from '../Components/FooterMenu'
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
      <h2 className="text-dark-blue absolute top-60 text-xl ml-14 md:text-2xl md:top-28 ">
        Partager, recevoir, préserver...
      </h2>
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
      <div className="my-8 w-full flex items-center justify-center flex-col mx-auto md:w-1/3">
        <h3 className="text-lg text-center">
          Créez un compte et rejoignez notre communauté.
        </h3>
        <p className="text-xs text-center text-gray-recycle">
          Un compte est nécessaire pour communiquer avec les vendeurs et publier
          une annonce.
        </p>
        <button
          className="bg-green-recycle text-white rounded-xl px-6 w-48 mx-auto mt-6"
          onClick={() => {
            navigate('/inscription')
          }}
        >
          S inscrire
        </button>
      </div>
      <div className="w-5/6 bg-black-opacity-50 mx-auto  h-px rounded-xl"></div>
      <SocialNetworks />
      <div className="w-5/6 bg-black-opacity-50 mx-auto  h-px rounded-xl"></div>

      <Footer />
      <FooterMenu />
    </div>
  )
}
export default Home
