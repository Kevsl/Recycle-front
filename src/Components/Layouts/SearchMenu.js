import { CategoryMenu } from './CategoryMenu'
import React, { useState } from 'react'
export const SearchMenu = ({ setiIAdsVisible }) => {
  const [listingTypeId, setListingTypeId] = useState('')
  const [listingSubTypeId, setListingSubTypeId] = useState(1)
  const [listingCategoryId, setListingCategoryId] = useState('')
  const [listingSubCategoryId, setListingSubCategoryId] = useState('')
  const [round, setRound] = useState(0)

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
      <div className="flex items-center justify-center my-4">
        <input
          type="text"
          placeholder="Localisation"
          className="border border-gray-recycle rounded-lg mx-4 w-48 indent-5 text-gray-recycle"
        />
        <div className="-mt-2">
          <label for="squarekm" className="mx-2 text-gray-recycle">
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
      <div className="flex items-center justify-center">
        <button
          className="w-48 mx-auto my-6 border border-solid border-green-recycle bg-green-recycle text-white px-2 py-2 rounded-lg cursor-pointer"
          onClick={() => {
            setiIAdsVisible(true)
          }}
        >
          Rechercher
        </button>
      </div>
    </div>
  )
}
