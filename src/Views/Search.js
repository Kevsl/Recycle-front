import { Header } from '../Components/Layouts/Header'
import { Ads } from '../Components/Layouts/Ads'
import { Footer } from '../Components/Layouts/Footer'
import { FooterMenu } from '../Components/FooterMenu'
import React, { useState, useEffect } from 'react'
import { getListings } from '../Service/listingService'
import { SearchMenu } from '../Components/Layouts/SearchMenu'

const Search = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [listings, setListings] = useState(true)
  const [isAdsVisible, setisAdsVisible] = useState(false)
  const [listingTypeId, setListingTypeId] = useState('')
  const [listingSubTypeId, setListingSubTypeId] = useState(1)
  const [listingCategoryId, setListingCategoryId] = useState('')
  const [listingSubCategoryId, setListingSubCategoryId] = useState('')
  const [coordinates, setCoordinates] = useState('')
  const [city, setCity] = useState('')

  const [round, setRound] = useState(0)

  useEffect(() => {
    setIsLoading(true)
    if (isAdsVisible) {
      getListings().then((res) => {
        setIsLoading(false)
        setListings(res)
      })
    }
  }, [isAdsVisible])

  function handleSearch() {
    if (isAdsVisible) {
      getListings(
        listingTypeId,
        listingSubTypeId,
        listingCategoryId,
        listingSubCategoryId,
        city,
        coordinates,
        round
      ).then((res) => {
        setIsLoading(false)
        setListings(res)
      })
    }
  }

  return (
    <div className="font-Baloo">
      <Header />
      <div className="mt-24">
        <SearchMenu
          setisAdsVisible={setisAdsVisible}
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
          setCoordinates={setCoordinates}
          round={round}
          setRound={setRound}
        />
        <div className="w-full bg-black-opacity-50 mx-auto  h-px rounded-xl"></div>
        <div>
          {listings && isAdsVisible && (
            <Ads
              listings={listings}
              isLoading={isLoading}
              title={
                listings.length > 0 &&
                `Résultats pour votre recherche : ${listings.length} annonces`
              }
            />
          )}
        </div>
        <div className="w-5/6 bg-black-opacity-50 mx-auto  h-px rounded-xl"></div>
        <Footer />
        <FooterMenu />
      </div>
    </div>
  )
}
export default Search
