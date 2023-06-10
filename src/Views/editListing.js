import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FooterMenu } from '../Components/Layouts/FooterMenu'
import { CategoryMenu } from '../Components/Layouts/CategoryMenu'
import { Footer } from '../Components/Layouts/Footer'
import { Header } from '../Components/Layouts/Header'
import { createListing, getCitiesList } from '../Service/listingService'
import { AcceptMaxFiles } from '../Utils/dragNDrop'
import { useLocation } from 'react-router-dom'
import { getListing } from '../Service/listingService'
import { Triangle } from 'react-loader-spinner'

const EditListing = () => {
  const [zip, setZip] = useState('')
  const [city, setCity] = useState('')
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const [listingTypeId, setListingTypeId] = useState('')
  const [listingSubTypeId, setListingSubTypeId] = useState(1)
  const [listingCategoryId, setListingCategoryId] = useState('')
  const [listingSubCategoryId, setListingSubCategoryId] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [coordinatesList, setCoordinatesList] = useState([])
  const [query, setQuery] = useState([])
  const [queryFound, setQueryFound] = useState(false)
  const navigate = useNavigate()
  const { state } = useLocation()
  const { id } = state
  const [isLoading, setIsLoading] = useState(false)
  const [listingData, setListingData] = useState([])

  useEffect(() => {
    getListing(id).then((res) => {
      setIsLoading(true)
      setListingData(res[0])

      setIsLoading(false)
    })
  }, [id])

  function handleSubmit() {
    if (
      title &&
      listingTypeId &&
      listingCategoryId &&
      listingSubTypeId &&
      zip &&
      city &&
      description
    ) {
      EditListing(
        title,
        description,
        listingTypeId,
        listingSubTypeId,
        listingCategoryId,
        listingSubCategoryId,
        zip,
        city,
        latitude,
        longitude
      ).then((res) => {
        navigate('/')
      })
    }
  }
  useEffect(() => {
    if (query.length > 2 && !queryFound) {
      getCitiesList(query).then((res) => {
        setCoordinatesList(res)
      })
    }
  }, [query, queryFound])

  function handleCity(resultCity) {
    setCity(resultCity.properties.label)
    setLatitude(resultCity.geometry.coordinates[0])
    setLongitude(resultCity.geometry.coordinates[1])
    setZip(resultCity.properties.postcode)
    setQueryFound(true)
    setCoordinatesList([])
  }

  return (
    <div>
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
      ) : (
        <div>
          <Header />
          <div className="flex flex-col justify-center w-5/6 mx-auto font-Baloo max-w-xl border border-solid px-4 py-4 rounded-xl my-4 border-green-recycle mt-28">
            <h1 className="text-center my-8 text-3xl text-bold text-gray-recycle">
              Modifier une annonce
            </h1>

            <AcceptMaxFiles />
            <div className="flex flex-col items-center justify-center mt-8">
              <p className="text-gray-recycle">Lieu de l'annonce</p>
              <input
                type="text"
                className="w-2/3 indent-5 mx-auto border-b border-gray-recycle text-gray-recycle mt-1 mb-4 font-Baloo font-bold"
                onChange={(e) => {
                  setTitle(e.target.value)
                }}
                defaultValue={listingData?.title}
              />
            </div>

            <div className="flex flex-col items-center justify-center">
              <p className="text-gray-recycle">Lieu de l'annonce</p>
              <input
                type="text"
                placeholder="Localisation"
                className="border border-gray-recycle rounded-lg mx-4 w-64 indent-5 text-gray-recycle mt-2 mb-4"
                onChange={(e) => {
                  setQuery(e.target.value)
                }}
                value={queryFound ? city : listingData?.city}
              />
              {coordinatesList.length > 0 && (
                <div className="flex items-center justify-center mt-4">
                  <ul className=" border border-gray-recycle text-gray-recycle rounded-lg w-64 bg-white -mt-2">
                    {coordinatesList.map((resultCity) => {
                      return (
                        <li
                          className="my-2 w-full pl-5"
                          key={resultCity.properties.score}
                          onClick={() => {
                            handleCity(resultCity)
                          }}
                        >
                          {`${resultCity.properties.label} ${resultCity.properties.postcode}`}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}
            </div>
            <div className="flex flex-col justify-center max-w-xl mx-auto">
              <p className="text-gray-recycle text-center my-1">Description</p>
              <textarea
                rows={5}
                cols={33}
                defaultValue={listingData?.description}
                className="border border-solid border-dark-blue rounded-lg max-w-xl text-gray-recycle px-5 py-5"
                onChange={(e) => {
                  setDescription(e.target.value)
                }}
              />
            </div>
            <button
              className="w-64 h-8 text-center mx-auto text-white bg-green-recycle rounded-lg my-6"
              onClick={() => {
                handleSubmit()
              }}
              aria-label="Modifier votre annonce"
            >
              Modifier l'annonce
            </button>
          </div>
          <Footer />
        </div>
      )}
      <FooterMenu />
    </div>
  )
}
export default EditListing
