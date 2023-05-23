import React from 'react'
import { Triangle } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import noPhoto from '../../Assets/images/no-photo.png'

export const Ads = ({ listings, isLoading, title }) => {
  const navigate = useNavigate()

  return (
    <div className="font-Baloo block mb-12  listings">
      <div className="w-full mt-22">
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
          ) : listings.length <= 0 ? (
            <div>
              <p className="text-sm italic text-gray-recycle">
                Aucune annonce pour le moment...
              </p>
            </div>
          ) : listings ? (
            listings.map((listing) => {
              return (
                <div
                  key={listing.id}
                  className="w-40 sm:w-1/3 sm:mx-5 mx- my-8  rounded-xl relative cursor-pointer "
                  onClick={() => {
                    navigate('/listing', { state: { id: listing.id } })
                  }}
                >
                  <img
                    className="w-full object-cover md:h-full max-h-24 md:max-h-32 rounded-xl z-20"
                    src={listing.photo ? listing.photo : noPhoto}
                    alt={listing.title}
                  />
                  <p className="absolute bottom-0 bg-black-opacity-50 w-full text-center text-white text-xs rounded-b-xl ">
                    {listing.title} <br /> {listing.city}
                  </p>
                </div>
              )
            })
          ) : (
            <p>Aucune annonce</p>
          )}
        </div>
      </div>
    </div>
  )
}
