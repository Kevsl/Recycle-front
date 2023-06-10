import React, { useState } from 'react'
import { Triangle } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import noPhoto from '../../Assets/images/no-photo.png'
import { deleteListing } from '../../Service/listingService'

export const Ads = ({ listings, isLoading, title, edit }) => {
  const navigate = useNavigate()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [idToDelete, setIdToDelete] = useState('')

  return (
    <div className="font-Baloo block mb-12  listings relative">
      <div className="w-full mt-22">
        <h2 className="text-dark-blue text-center my-4">{title}</h2>
        <div className="flex items-center  flex-wrap justify-evenly">
          {isLoading ? (
            <div className="w-1/2 mx-auto flex items-center justify-center ">
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
          ) : listings.length <= 0 ? (
            <div>
              <p className="text-sm italic text-gray-recycle">
                Aucune annonce pour le moment...
              </p>
            </div>
          ) : listings && listings !== 'empty' ? (
            listings.map((listing) => {
              return (
                <div
                  key={listing.id}
                  className="w-40 sm:w-1/3 sm:mx-5 mx- my-8  rounded-xl relative cursor-pointer "
                >
                  {edit && (
                    <p className=" w-full absolute flex items-center justify-end px-2">
                      <i
                        className="fa-solid fa-pen-to-square mx-2  my-2 text-gray-recycle w-6 h-6 text-center bg-gray-light pt-1 rounded-lg"
                        onClick={() => {
                          navigate('/modification', {
                            state: { id: listing.id },
                          })
                        }}
                      ></i>
                      <i
                        className="fa-solid fa-trash mx-2  my-2 text-red-recycle w-6 h-6 text-center bg-gray-light pt-1 rounded-lg"
                        onClick={() => {
                          setIsModalOpen(true)
                          setIdToDelete(listing.id)
                        }}
                      ></i>
                    </p>
                  )}

                  <img
                    className="w-full object-cover md:h-full max-h-24 md:max-h-32 rounded-xl z-20"
                    src={
                      listing.listingCoverImage &&
                      listing.listingCoverImage !== 'empty'
                        ? listing.listingCoverImage
                        : listing.fkListingCategoryImage
                        ? listing.fkListingCategoryImage
                        : listing.images
                        ? listing.images[0]
                        : noPhoto
                    }
                    alt={listing.title}
                    onClick={() => {
                      navigate('/listing', { state: { id: listing.id } })
                    }}
                  />
                  <p className="absolute bottom-0 bg-black-opacity-50 w-full text-center text-white text-xs rounded-b-xl ">
                    {listing.title} <br /> {listing.city}
                  </p>
                </div>
              )
            })
          ) : (
            <p>Aucune annonce...</p>
          )}
        </div>
      </div>
      {isModalOpen && (
        <div className="absolute left-0 top-0 w-screen -top-101 z-50 h-400  bg-gray-recycle opacity-95 ">
          <div className="w-1/2 absolute left-1/4 h-48 top-101  bg-white opacity-100 rounded-xl">
            <p className="text-black text-center my-8">
              Êtes vous sur de vouloir supprimer cette annonce
            </p>
            <div className="w-full flex items-center justify-center">
              <button
                className="border border-solid border-gray-recycle rounded-sm mx-4 text-gray-recycle w-24 h-10 "
                onClick={() => {
                  setIsModalOpen(false)
                }}
                aria-label="Annuler la suppresion d'une annonce"
              >
                Annuler
              </button>
              <button
                className="border border-solid border-green-recycle  bg-red-recycle rounded-sm mx-4 text-white w-24 h-10 "
                onClick={() => {
                  setIsModalOpen(false)
                  deleteListing(idToDelete).then((res) => {
                    navigate('/profil')
                  })
                }}
                aria-label="Confirmer la suppresion d'une annonce"
              >
                Supprimer
              </button>
            </div>

            <div className="flex items-center justify-around"></div>
          </div>
        </div>
      )}
    </div>
  )
}
