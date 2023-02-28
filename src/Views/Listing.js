import { Footer } from '../Components/Layouts/Footer'
import { useNavigate, useLocation } from 'react-router-dom'
import { FooterMenu } from '../Components/FooterMenu'
import React, { useState, useEffect } from 'react'
import { getListing } from '../Service/listingService'
import { Header } from '../Components/Layouts/Header'

const Listing = () => {
  const navigate = useNavigate()
  const [listingData, setListingData] = useState([])
  let carousselPosition = 0
  const { state } = useLocation()
  const { id } = state

  useEffect(() => {
    getListing(id).then((res) => {
      console.log(res)
      setListingData(res)
    })
  }, [id])

  useEffect(() => {}, [carousselPosition])

  function handleCaroussel(direction) {
    if (direction === '+') {
      carousselPosition++
      if (carousselPosition === listingData[0].images.length - 1) {
        carousselPosition = -1
      }
    } else {
      carousselPosition--
      if (carousselPosition < 0) {
        carousselPosition = 3
      }
    }
  }
  return (
    <div className="font-Baloo w-full text-gray-recycle">
      <Header />
      <div className=" mx-auto">
        {listingData &&
          listingData.map((data) => {
            return (
              <div key={data.id}>
                <div className="relative flex items-center justify-between overflow-y-hidden h-96 mt-4 md:mt-16">
                  <button
                    className="w-16 h-16 absolute top-32 right-2 z-10 rounded-full py-1 flex items-center justify-center hover:bg-gray hover:text-white"
                    onClick={() => {
                      handleCaroussel('-')
                    }}
                  >
                    <i class="fa-solid fa-chevron-right"></i>
                  </button>
                  <img
                    src={data.images[carousselPosition]}
                    className="w-full object-cover"
                  />
                  <button
                    className="w-16 h-16 absolute top-32 left-2 z-10  rounded-full py-1 flex items-center justify-center hover:bg-gray hover:text-white"
                    onClick={() => {
                      handleCaroussel('+')
                    }}
                  >
                    <i class="fa-solid fa-chevron-left"></i>
                  </button>
                </div>
                <div className="my-8 w-5/6 mx-auto">
                  <label className="mr-2  border border-solid border-green-recycle text-green-recycle px-2 py-2 rounded-lg">
                    {data.fkListingCategory}
                  </label>
                  <label className="mr-2  border border-solid border-green-recycle text-green-recycle px-2 py-2 rounded-lg">
                    {data.subCategory}
                  </label>
                  <h1 className="text-2xl  text-gray-recycle font-bold mt-8">
                    {data.title}
                  </h1>
                  <div className="flex items-center justify-between my-8">
                    <div className=" flex items-center">
                      <img
                        src={localStorage.getItem('avatar')}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <p className="md:ml-8 ml-2">
                        Inscrit(e) le: <br />
                        <span className="text-gray-light">
                          {new Date().toLocaleDateString('fr-fr')}
                        </span>
                      </p>
                    </div>
                    <button className="bg-green-recycle text-white px-2 py-2 rounded-full cursor-pointer">
                      Contacter
                    </button>
                  </div>
                  <div>
                    <div className="flex items-center px-4 justify-between my-4">
                      <div>
                        <p>Lieu</p>
                        <p>{data.city}</p>
                      </div>
                      <div>
                        <p>Type</p>
                        <p>{data.fkListingType}</p>
                      </div>
                    </div>
                    <div className="mb-24">
                      <p className="px-4">
                        Description : <br />
                        {data.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
      <Footer />
      <FooterMenu />
    </div>
  )
}
export default Listing
