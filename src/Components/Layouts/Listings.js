/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react'
import { getListings } from '../../Service/listingService'
import { Triangle } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

export const listings = () => {
  const [listings, setListings] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    setIsLoading(true)
    getListings().then((res) => {
      setIsLoading(false)
      setListings(res)
    })
  }, [])

  return (
    <div className="font-Baloo block mb-12 listings">
      <div className="w-90 mx-5 mt-16">
        <h2 className="text-dark-blue ml-4 md:ml-12">Toutes les catégories</h2>
        <div className="flex items-center flex-wrap">
          {isLoading === true ? (
            <div className="w-1/2 mx-auto flex items-center justify-between">
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
          ) : (
            listings.map((listing) => {
              return (
                <div
                  key={listing.id}
                  className="w-40 sm:w-1/3 sm:mx-5 mx- my-8  rounded-xl relative cursor-pointer "
                >
                  <img
                    className="w-full object-cover md:h-full max-h-24 md:max-h-32 rounded-xl z-20"
                    src={listing.images[0]}
                    alt={listing.title}
                  />
                  <p className="absolute bottom-0 bg-black-opacity-50 w-full text-center text-white text-xs md:text-sm rounded-b-xl">
                    {listing.title}
                  </p>
                  <p className="absolute bottom-0 bg-black-opacity-50 w-full text-center text-white text-xs md:text-sm rounded-b-xl">
                    {listing.city[0]}
                  </p>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
