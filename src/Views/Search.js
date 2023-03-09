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
  const [isAdsVisible, setiIAdsVisible] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    if (isAdsVisible) {
      getListings().then((res) => {
        setIsLoading(false)
        setListings(res)
      })
    }
  }, [isAdsVisible])

  return (
    <div className="font-Baloo">
      <Header />
      <div className="mt-24">
        <SearchMenu setiIAdsVisible={setiIAdsVisible} />
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
