import { getSubCategoriesByCategoryId } from '../../Service/categoriesService'
import {
  getListingCategories,
  getListingTypes,
} from '../../Service/listingService'
import React, { useState, useEffect } from 'react'

export const CategoryMenu = ({
  listingTypeId,
  setListingTypeId,
  listingSubTypeId,
  setListingSubTypeId,
  listingCategoryId,
  setListingCategoryId,
  listingSubCategoryId,
  setListingSubCategoryId,
}) => {
  const [listingTypeList, setListingTypeList] = useState([])
  const [listingCategories, setListingCategories] = useState([])
  const [listingSubCategoriesList, setListingSubCategoriesList] = useState([])

  useEffect(() => {
    getListingTypes().then((res) => {
      setListingTypeList(res)
    })
    getListingCategories().then((res) => {
      setListingCategories(res)
    })
  }, [])

  useEffect(() => {
    if (listingCategoryId) {
      getSubCategoriesByCategoryId(listingCategoryId).then((res) => {
        setListingSubCategoriesList(res)
      })
    }
  }, [listingCategoryId])
  return (
    <>
      <div>
        <p className="text-center my-4 text-gray-recycle">Type d'annonce</p>

        <div className="flex items-center flex-wrap justify-center my-4">
          {listingTypeList &&
            listingTypeList.map((listingType) => {
              return (
                <div key={listingType.id} className="h-21 my-4">
                  <input
                    id={`listing-type-${listingType.id}`}
                    type="radio"
                    name="listing-type"
                    className="peer hidden"
                    value={`listing-type-${listingType.id}`}
                    aria-label={listingType.type}
                    onClick={() => {
                      setListingTypeId(listingType.id)
                    }}
                  />
                  <label
                    htmlFor={`listing-type-${listingType.id}`}
                    className="mx-2 border border-solid border-green-recycle text-green-recycle px-2 py-2 rounded-lg  peer-checked:bg-green-recycle peer-checked:text-white  my-4 cursor-pointer "
                  >
                    {listingType.type}
                  </label>
                </div>
              )
            })}
        </div>
      </div>
      <div className="my-4">
        <p className="text-center my-4 text-gray-recycle">
          Catégorie de l'annonce
        </p>
        <div className="flex items-center flex-wrap justify-center my-4">
          {listingCategories &&
            listingCategories.map((listingCategory) => {
              return (
                <div className="h-21 my-4" key={listingCategory.id}>
                  <input
                    id={`listing-category-${listingCategory.id}`}
                    type="radio"
                    name="listing-category"
                    className="peer hidden"
                    value={`listing-category-${listingCategory.id}`}
                    aria-label={listingCategory.category}
                    onClick={() => {
                      setListingCategoryId(listingCategory.id)
                    }}
                  />
                  <label
                    htmlFor={`listing-category-${listingCategory.id}`}
                    className="mx-2 border border-solid border-green-recycle text-green-recycle px-2 py-2 rounded-lg  peer-checked:bg-green-recycle peer-checked:text-white  my-4 cursor-pointer "
                  >
                    {listingCategory.category}
                  </label>
                </div>
              )
            })}
        </div>
        {listingSubCategoriesList.length > 0 && (
          <p className="text-center my-4 text-gray-recycle">
            Sous Catégorie de l'annonce
          </p>
        )}
        <div className="flex items-center flex-wrap justify-center my-4">
          {listingSubCategoriesList &&
            listingSubCategoriesList.map((listingSubCategory) => {
              return (
                <div
                  className="h-21 my-4"
                  key={listingSubCategory.subCategoryId}
                >
                  <input
                    id={`listing-subcategory-${listingSubCategory.subCategoryId}`}
                    type="radio"
                    name="listing-subcategory"
                    className="peer hidden"
                    value={`listing-subcategory-${listingSubCategory.subCategoryId}`}
                    aria-label={listingSubCategory.category}
                    onClick={() => {
                      setListingSubCategoryId(listingSubCategory.subCategoryId)
                    }}
                  />
                  <label
                    htmlFor={`listing-subcategory-${listingSubCategory.subCategoryId}`}
                    className="mx-2 border border-solid border-green-recycle text-green-recycle px-2 py-2 rounded-lg  peer-checked:bg-green-recycle peer-checked:text-white  my-4 cursor-pointer "
                  >
                    {listingSubCategory.subCategoryName}
                  </label>
                </div>
              )
            })}
        </div>
      </div>
    </>
  )
}
