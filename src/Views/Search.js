import { Header } from '../Components/Layouts/Header'
import { Ads } from '../Components/Layouts/Ads'
import { FooterMenu } from '../Components/Layouts/FooterMenu'
import React, { useState } from 'react'
import { getCustomListings } from '../Service/listingService'
import { SearchMenu } from '../Components/Layouts/SearchMenu'
import { Triangle } from 'react-loader-spinner'

const Search = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [listings, setListings] = useState(true)
  const [isAdsVisible, setIsAdsVisible] = useState(false)
  const [listingTypeId, setListingTypeId] = useState('')
  const [listingSubTypeId, setListingSubTypeId] = useState(1)
  const [listingCategoryId, setListingCategoryId] = useState('')
  const [listingSubCategoryId, setListingSubCategoryId] = useState('')
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [city, setCity] = useState('')
  const [round, setRound] = useState(0)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSearch = () => {
    setIsLoading(true)

    if (
      (listingTypeId,
      listingSubTypeId,
      listingCategoryId,
      listingSubCategoryId,
      latitude,
      longitude,
      round)
    ) {
      setErrorMessage('')
      getCustomListings(
        listingTypeId,
        listingSubTypeId,
        listingCategoryId,
        listingSubCategoryId,
        latitude,
        longitude,
        round
      ).then((res) => {
        setIsLoading(false)
        setListings(res)
        setIsAdsVisible(true)
      })
    } else {
      setErrorMessage('Tous les champs sont obligatoires')
    }
  }

  return (
    <div className="font-Baloo">
      <Header />
      <div className="mt-24">
        <h1 className="text-center mt-20 text-xl text-bold text-gray-recycle">
          Rechercher une annonce
        </h1>
        <SearchMenu
          setIsAdsVisible={setIsAdsVisible}
          listingTypeId={listingTypeId}
          setListingTypeId={setListingTypeId}
          listingSubTypeId={listingSubTypeId}
          setListingSubTypeId={setListingSubTypeId}
          listingCategoryId={listingCategoryId}
          setListingCategoryId={setListingCategoryId}
          listingSubCategoryId={listingSubCategoryId}
          setListingSubCategoryId={setListingSubCategoryId}
          city={city}
          setCity={setCity}
          setLatitude={setLatitude}
          setLongitude={setLongitude}
          round={round}
          setRound={setRound}
          handleSearch={handleSearch}
          errorMessage={errorMessage}
        />
        <div className="w-full bg-black-opacity-50 mx-auto  h-px rounded-xl"></div>
        <div className="mb-48">
          {isLoading ? (
            <div className="w-screen h-screen mx-auto my-auto flex items-center justify-center">
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
            listings &&
            isAdsVisible && (
              <Ads
                listings={listings}
                isLoading={isLoading}
                title={
                  listings.length > 0 &&
                  listings !== 'empty' &&
                  `Résultats pour votre recherche : ${listings.length} annonces`
                }
              />
            )
          )}
        </div>
        <FooterMenu />
      </div>
    </div>
  )
}
export default Search
