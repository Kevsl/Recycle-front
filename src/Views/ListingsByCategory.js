import { Header } from '../Components/Layouts/Header'
import { Ads } from '../Components/Layouts/Ads'
import { useParams, useLocation } from 'react-router-dom'
import { FooterMenu } from '../Components/Layouts/FooterMenu'
import { getListingByCategory } from '../Service/listingService'
import React, { useState, useEffect } from 'react'
import { Triangle } from 'react-loader-spinner'

const ListingsCategory = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [listings, setListings] = useState(true)
  const location = useLocation()
  let id = useParams()
  let categoryName = location.state.category

  useEffect(() => {
    setIsLoading(true)
    getListingByCategory(id.id).then((res) => {
      setIsLoading(false)
      setListings(res)
    })
  }, [id.id])

  return (
    <div className="font-Baloo">
      <Header />

      <div className="w-5/6 bg-black-opacity-50 mx-auto h-px rounded-xl"></div>
      <h1 className="text-center mt-20 text-xl text-bold text-gray-recycle">
        Annonces par catégories
      </h1>
      {isLoading ? (
        <div className="w-screen h-screen mx-auto my-auto flex items-center justify-center">
          <Triangle
            color="#91C788"
            aria-label="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
            width="80"
            height="80"
          />
        </div>
      ) : listings && listings.length > 0 ? (
        <div className="mt-12">
          <Ads
            listings={listings}
            isLoading={isLoading}
            title={
              categoryName
                ? `Les annonces pour la catégorie ${categoryName}`
                : 'Catégorie'
            }
          />
        </div>
      ) : (
        <p className="mt-24 text-xl text-center text-gray-recycle">
          "Aucun produit n'est disponible pour cette catégorie"
        </p>
      )}
      <FooterMenu />
    </div>
  )
}
export default ListingsCategory
