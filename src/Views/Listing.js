import { Footer } from '../Components/Layouts/Footer'
import { useNavigate, useLocation } from 'react-router-dom'
import { FooterMenu } from '../Components/FooterMenu'
import React, { useState, useEffect } from 'react'
import { getListing } from '../Service/listingService'

const Listing = () => {
  const navigate = useNavigate()
  const [listingData, setListingData] = useState([])
  let carousselPosition = 0
  const { state } = useLocation()
  const { id } = state

  useEffect(() => {
    getListing(id).then((res) => {
      setListingData(res)
    })
  }, [id])

  useEffect(() => {
    console.log(carousselPosition)
  }, [carousselPosition])

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
    <div className="font-Baloo">
      <div className="bg-reCycle-green w-4/6 mx-auto h-72">
        {listingData &&
          listingData.map((data) => {
            return (
              <div key={data.id}>
                <div className="relative">
                  <img src={data.images[carousselPosition]} />
                  <button
                    className=""
                    onClick={() => {
                      handleCaroussel('+')
                    }}
                  >
                    +
                  </button>
                  <button
                    className=""
                    onClick={() => {
                      handleCaroussel('-')
                    }}
                  >
                    -
                  </button>
                </div>
                <div>
                  <p>{data.city}</p>
                  <p>{data.title}</p>
                  <p>{data.description}</p>
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
