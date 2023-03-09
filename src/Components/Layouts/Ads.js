import React from 'react'
import { Triangle } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import noPhoto from '../../Assets/images/no-photo.png'

export const Ads = ({ listings, isLoading, title }) => {
  const navigate = useNavigate()

  return (
    <div className="font-Baloo block mb-12  listings">
      <div className="w-full mt-16">
        <h2 className="text-dark-blue text-center my-4">{title}</h2>
        <div className="flex items-center  flex-wrap justify-evenly">
          {isLoading === true ? (
            <div className="w-1/2 mx-auto flex items-center justify-center ">
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
                  className="md:w-1/4 md:mx-1 mx- my-8  rounded-xl relative cursor-pointer "
                  onClick={() => {
                    navigate('/listing', { state: { id: listing.id } })
                  }}
                >
                  <img
                    className="w-full object-cover rounded-xl z-20 md:max-h-32 max-h-24 "
                    src={listing.image ? listing.image : noPhoto}
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
