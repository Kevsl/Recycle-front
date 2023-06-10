import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { FooterMenu } from '../Components/Layouts/FooterMenu'
import { CategoryMenu } from '../Components/Layouts/CategoryMenu'
import { Footer } from '../Components/Layouts/Footer'
import { Header } from '../Components/Layouts/Header'
import { createListing, getCitiesList } from '../Service/listingService'
import UploadWidget from '../Components/UploadWidget'

const CreateListing = () => {
  const [zip, setZip] = useState('')
  const [city, setCity] = useState('')
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const [listingTypeId, setListingTypeId] = useState('')
  const [listingSubTypeId, setListingSubTypeId] = useState(1)
  const [listingCategoryId, setListingCategoryId] = useState('')
  const [listingSubCategoryId, setListingSubCategoryId] = useState('')
  const [acceptedListingImages, setAcceptedListingImages] = useState([])

  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [coordinatesList, setCoordinatesList] = useState([])
  const [query, setQuery] = useState([])
  const [queryFound, setQueryFound] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit() {
    if (
      title &&
      listingTypeId &&
      listingCategoryId &&
      listingSubTypeId &&
      zip &&
      city &&
      description &&
      latitude &&
      longitude &&
      acceptedListingImages
    ) {
      await createListing(
        title,
        description,
        listingTypeId,
        listingSubTypeId,
        listingCategoryId,
        listingSubCategoryId,
        zip,
        city,
        latitude,
        longitude,
        acceptedListingImages
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
      <Header />
      <div className="flex flex-col justify-center w-5/6 mx-auto font-Baloo max-w-xl border border-solid px-4 py-4 rounded-xl my-4 border-green-recycle mt-28">
        <h1 className="text-center my-8 text-3xl text-bold text-gray-recycle">
          Création d'annonces
        </h1>

        <UploadWidget
          setAcceptedListingImages={setAcceptedListingImages}
          acceptedListingImages={acceptedListingImages}
        />
        <input
          type="text"
          className="w-2/3 indent-5 mx-auto border-b border-gray-recycle text-gray-recycle mt-10 mb-4 font-Baloo font-bold"
          placeholder="Titre de l'annonce"
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <CategoryMenu
          listingTypeId={listingTypeId}
          setListingTypeId={setListingTypeId}
          listingSubTypeId={listingSubTypeId}
          setListingSubTypeId={setListingSubTypeId}
          listingCategoryId={listingCategoryId}
          setListingCategoryId={setListingCategoryId}
          listingSubCategoryId={listingSubCategoryId}
          setListingSubCategoryId={setListingSubCategoryId}
        />
        <div className="flex flex-col items-center justify-center my-4">
          <p className="text-gray-recycle">Lieu de l'annonce</p>
          <input
            type="text"
            placeholder="Localisation"
            className="border border-gray-recycle rounded-lg mx-4 w-64 indent-5 text-gray-recycle mt-6"
            onChange={(e) => {
              setQuery(e.target.value)
            }}
            value={queryFound ? city : query}
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
          <p className="text-gray-recycle">Description</p>
          <textarea
            rows={5}
            cols={33}
            className="border border-solid border-dark-blue rounded-lg max-w-xl text-gray-recycle indent-5"
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
          aria-label="Publier votre annonce"
        >
          Poster une annonce
        </button>
      </div>
      <Footer />
      <FooterMenu />
    </div>
  )
}
export default CreateListing
