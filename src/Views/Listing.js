import { Footer } from '../Components/Layouts/Footer'
import { useLocation } from 'react-router-dom'
import { FooterMenu } from '../Components/FooterMenu'
import React, { useState, useEffect } from 'react'
import { getListing } from '../Service/listingService'
import { Header } from '../Components/Layouts/Header'
import { Triangle } from 'react-loader-spinner'

const Listing = () => {
  const [listingData, setListingData] = useState([])
  const [carousselPosition, setCarousselPosition] = useState(0)
  const { state } = useLocation()
  const { id } = state
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getListing(id).then((res) => {
      setIsLoading(true)
      setListingData(res)
      setIsLoading(false)
    })
  }, [id])

  function handleCaroussel(direction) {
    if (direction === 'right') {
      let value = carousselPosition
      setCarousselPosition((value += 1))
      if (carousselPosition === listingData[0].images.length - 1) {
        setCarousselPosition(0)
      }
    } else {
      let value = carousselPosition
      setCarousselPosition((value -= 1))
      if (carousselPosition < 1) {
        setCarousselPosition(2)
      }
    }
  }

  return (
    <div className="font-Baloo w-full text-gray-recycle">
      <Header />
      <div className=" mx-auto">
        {isLoading ? (
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
        ) : listingData.length ? (
          listingData.map((data) => {
            return (
              <div key={data.id}>
                <div className="relative flex items-center justify-between overflow-y-hidden h-96 mt-4 md:mt-16">
                  <button
                    className="w-16 h-16 absolute top-42 right-0 rounded-full py-1 flex items-center justify-center hover:bg-gray hover:text-white cursor-pointer"
                    onClick={() => {
                      handleCaroussel('right')
                    }}
                  >
                    <i className="fa-solid fa-chevron-right"></i>
                  </button>
                  <img
                    src={data.images[carousselPosition]}
                    className="w-full object-cover"
                    alt={data.images[carousselPosition]}
                  />
                  <button
                    className="w-16 h-16 absolute top-42 left-2  rounded-full py-1 flex items-center justify-center hover:bg-gray hover:text-white"
                    onClick={() => {
                      handleCaroussel('left')
                    }}
                  >
                    <i className="fa-solid fa-chevron-left"></i>
                  </button>
                </div>
                <div className="my-8 w-5/6 mx-auto">
                  <label className="mr-2  border border-solid border-green-recycle text-green-recycle px-2 py-2 rounded-lg">
                    {data.listingCategory}
                  </label>
                  <label className="mr-2  border border-solid border-green-recycle text-green-recycle px-2 py-2 rounded-lg">
                    {data.listingSubCategory}
                  </label>
                  <h1 className="text-2xl  text-gray-recycle font-bold mt-8">
                    {data.title}
                  </h1>
                  <div className="flex items-center justify-between my-8">
                    <div className=" flex items-center">
                      <img
                        src={data.photo}
                        className="w-16 h-16 rounded-full object-cover"
                        alt={data.photo}
                      />
                      <div>
                        <p className="md:ml-8 ml-2">{data.name}</p>
                        <p className="md:ml-8 ml-2 text-xs text-gray-light ">
                          Inscrit(e) le: <br />
                          <span className="">
                            {new Date(data.createdAt.date).toLocaleDateString(
                              'fr-fr'
                            )}
                          </span>
                        </p>
                      </div>
                    </div>
                    <button className="bg-green-recycle text-white px-2 py-2 rounded-full cursor-pointer">
                      Contacter
                    </button>
                  </div>
                  <div>
                    <div className="flex items-center px-4 justify-between my-4">
                      <div>
                        <p className="text-gray-dark-recycle">Lieu</p>
                        <p>{data.city}</p>
                      </div>
                      <div>
                        <p className="text-gray-dark-recycle">Type</p>
                        <p>{data.fkListingType}</p>
                      </div>
                    </div>
                    <div className="mb-24">
                      <p className="px-4">
                        <span className="text-gray-dark-recycle">
                          Description :
                        </span>
                        <br />
                        {data.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <p>Problème de chargement, veuillez réessayer plus tard</p>
        )}
      </div>
      <Footer />
      <FooterMenu />
    </div>
  )
}
export default Listing
