import { Header } from '../Components/Layouts/Header'
import { Ads } from '../Components/Layouts/Ads'
import { useNavigate } from 'react-router-dom'
import { FooterMenu } from '../Components/FooterMenu'
import { Balance } from '../Components/Layouts/Balance'
import { getListings, getMyListings } from '../Service/listingService'
import React, { useState, useEffect } from 'react'

const Profil = () => {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [listings, setListings] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    getMyListings(114).then((res) => {
      setIsLoading(false)
      setListings(res)
    })
  }, [])

  return (
    <div className="font-Baloo">
      <Header />
      <div className="my-8 flex items-center justify-center md:justify-between">
        <div className="w-full flex items-center justify-around hidden md:flex md:mt-12">
          <button
            className="w-48 border rounded-xl border-dark-Blue py-2 text-center"
            onClick={() => {
              navigate('/messages')
            }}
          >
            <i className="fa-solid fa-message mx-2"></i>
            Messagerie
          </button>
          <button
            className="w-48 border rounded-xl border-dark-Blue py-2 text-center bg-pink-recycle text-white"
            onClick={() => {
              navigate('/creation')
            }}
          >
            <i className="fa-solid fa-plus mx-2"></i>
            Publier
          </button>
          <button
            className="w-48 border rounded-xl border-dark-Blue py-2 text-center"
            onClick={() => {}}
          >
            <i className="fa-solid fa-user-pen mx-2"></i> Editer mon profil
          </button>
        </div>
        <Balance />
      </div>
      <div className="w-5/6 bg-black-opacity-50 mx-auto  h-px rounded-xl"></div>
      {listings && (
        <Ads listings={listings} isLoading={isLoading} title="Mes annonces" />
      )}{' '}
      <FooterMenu />
    </div>
  )
}
export default Profil
