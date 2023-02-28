import React, { useState, useEffect } from 'react'
import { getListings } from '../../Service/listingService'
import { Triangle } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'

export const Ads = () => {
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
    <div className="font-Baloo block mb-12  listings">
      <div className="w-90 mx-5  mt-16">
        <h2 className="text-dark-blue ml-4 md:ml-12 ">Toutes les annonces</h2>
        <div className="flex items-center flex-wrap justify-between">
          {isLoading === true ? (
            <div className="w-1/2 mx-auto flex items-center justify-evenly">
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
          ) : (
            listings.map((listing) => {
              return (
                <div
                  key={listing.id}
                  className="w-2/5 mx-5 md:w-1/4 md:mx-9 my-8 md:h-32 rounded-xl relative cursor-pointer "
                  onClick={() => {
                    navigate('/listing', { state: { id: listing.id } })
                  }}
                >
                  <img
                    className="w-full object-cover h-full rounded-xl z-20"
                    src={listing.image}
                    alt={listing.title}
                  />
                  <p className="absolute bottom-0 bg-black-opacity-50 w-full text-center text-white text-xs rounded-b-xl">
                    {listing.title} <br /> {listing.city}
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
