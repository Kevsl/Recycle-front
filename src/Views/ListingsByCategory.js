import { Header } from '../Components/Layouts/Header'
import { Ads } from '../Components/Layouts/Ads'
import { useNavigate, useParams, useLocation } from 'react-router-dom'
import { FooterMenu } from '../Components/FooterMenu'
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
      console.log(res)
      setIsLoading(false)
      setListings(res)
    })
  }, [])

  return (
    <div className="font-Baloo">
      <Header />
      <div className="w-5/6 bg-black-opacity-50 mx-auto  h-px rounded-xl"></div>
      {isLoading ? (
        <div className="w-screen h-screen mx-auto my-auto flex items-center justify-center">
          <Triangle
            color="#91C788"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
            width="80"
            height="80"
          />
        </div>
      ) : listings && listings.length > 0 ? (
        <Ads
          listings={listings}
          isLoading={isLoading}
          title={
            categoryName
              ? `Les annonces pour la catégorie ${categoryName}`
              : 'Catégorie'
          }
        />
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
