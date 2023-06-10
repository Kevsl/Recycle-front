import { CategoryMenu } from './CategoryMenu'
import React, { useEffect, useState } from 'react'
import { getCitiesList } from '../../Service/listingService'
import { ErrorMessage } from './ErrorMessage'
export const SearchMenu = ({
  setIsAdsVisible,
  listingTypeId,
  setListingTypeId,
  listingSubTypeId,
  setListingSubTypeId,
  listingCategoryId,
  setListingCategoryId,
  listingSubCategoryId,
  setListingSubCategoryId,
  city,
  setCity,
  setLatitude,
  setLongitude,
  round,
  setRound,
  handleSearch,
  errorMessage,
}) => {
  const [coordinatesList, setCoordinatesList] = useState([])
  const [query, setQuery] = useState([])
  const [queryFound, setQueryFound] = useState(false)

  useEffect(() => {
    if (query.length > 2 && !queryFound) {
      getCitiesList(query).then((res) => {
        setCoordinatesList(res)
      })
    }
  }, [query, queryFound])

  function handleCity(resultCity) {
    setCity(resultCity.properties.label)
    setLongitude(resultCity.geometry.coordinates[0])
    setLatitude(resultCity.geometry.coordinates[1])
    setQueryFound(true)
    setCoordinatesList([])
  }

  return (
    <div>
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
      <div className="flex items-center justify-center my-4 relative">
        <input
          type="text"
          placeholder="Localisation"
          className="border border-gray-recycle rounded-lg mx-4 w-48 indent-5 text-gray-recycle"
          onChange={(e) => {
            setQueryFound(false)
            setQuery(e.target.value)
          }}
          value={queryFound ? city : query}
        />

        <div className="-mt-2">
          <label htmlFor="squarekm" className="mx-2 text-gray-recycle">
            {round} Kms autour
          </label>
          <input
            type="range"
            name="squarekm"
            id="squarekm"
            min="0"
            max="20"
            value={round}
            onChange={(e) => {
              setRound(e.target.value)
            }}
            className="text-green-recycle block"
          />
        </div>
      </div>
      {coordinatesList.length > 0 && (
        <div className="flex items-center justify-center mr-32">
          <ul className=" border border-gray-recycle text-gray-recycle rounded-lg w-48 bg-white -mt-2">
            {coordinatesList.map((resultCity) => {
              return (
                <li
                  className="my-2 w-full pl-5"
                  key={resultCity.properties.score}
                  onClick={() => {
                    handleCity(resultCity)
                  }}
                >
                  {resultCity.properties.label}
                </li>
              )
            })}
          </ul>
        </div>
      )}
      <ErrorMessage errorMessage={errorMessage} />
      <div className="flex items-center justify-center">
        <button
          className="w-48 mx-auto my-6 border border-solid border-green-recycle bg-green-recycle text-white px-2 py-2 rounded-lg cursor-pointer"
          onClick={() => {
            handleSearch()
          }}
          aria-label="Rechercher une annonce"
        >
          Rechercher
        </button>
      </div>
    </div>
  )
}
