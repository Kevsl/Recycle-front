import { Header } from '../Components/Layouts/Header'
import { Ads } from '../Components/Layouts/Ads'
import { FooterMenu } from '../Components/Layouts/FooterMenu'
import React, { useState } from 'react'
import { getCustomListings } from '../Service/listingService'
import { SearchMenu } from '../Components/Layouts/SearchMenu'

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

  const handleSearch = () => {
    setIsLoading(true)
    return getCustomListings(
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
  }

  return (
    <div className="font-Baloo">
      <Header />
      <div className="mt-24">
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
        <FooterMenu />
      </div>
    </div>
  )
}
export default Search
