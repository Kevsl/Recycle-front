import React, { useEffect, useState } from 'react'
import { getSubCategoriesByCategoryId } from '../Service/categoriesService'
import {
  createListing,
  getListingCategories,
  getListingTypes,
} from '../Service/listingService'
import { AcceptMaxFiles } from '../Utils/dragNDrop'

const CreateListing = () => {
  const [listingTypeList, setListingTypeList] = useState([])
  const [listingCategories, setListingCategories] = useState([])
  const [listingSubCategoriesList, setListingSubCategoriesList] = useState([])

  const [listingTypeId, setListingTypeId] = useState('')
  const [listingSubTypeId, setListingSubTypeId] = useState(1)
  const [listingCategoryId, setListingCategoryId] = useState('')
  const [listingSubCategoryId, setListingSubCategoryId] = useState('')

  const [zip, setZip] = useState('')
  const [city, setCity] = useState('')
  const [description, setDescription] = useState('')
  const [photos, setPhotos] = useState([])
  const [title, setTitle] = useState('')

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
      createListing(
        title,
        listingTypeId,
        listingCategoryId,
        listingSubTypeId,
        zip,
        city,
        description,
        title
      ).then((res) => {
        console.log(res)
      })
    }
  }

  useEffect(() => {
    getListingTypes().then((res) => {
      setListingTypeList(res)
    })
    getListingCategories().then((res) => {
      setListingCategories(res)
    })
  }, [])

  useEffect(() => {
    getSubCategoriesByCategoryId(listingCategoryId).then((res) => {
      setListingSubCategoriesList(res)
    })
  }, [listingCategoryId])

  return (
    <div className="flex flex-col justify-center w-5/6 mx-auto font-Baloo max-w-xl border border-solid px-4 py-4 rounded-xl my-4 border-green-recycle">
      <h1 className="text-center my-8 text-3xl text-bold text-gray-recycle">
        Création d'annonces
      </h1>

      <AcceptMaxFiles />

      <input
        type="text"
        className="w-2/3 text-center mx-auto border-b border-gray-recycle text-gray-recycle mt-10 mb-4 font-Baloo font-bold"
        placeholder="Titre de l'annonce"
        onChange={(e) => {
          setTitle(e.target.value)
        }}
      />
      <div>
        <p className="text-center my-4 text-gray-recycle">Type d'annonce</p>
        <div className="flex items-center justify-center">
          {listingTypeList &&
            listingTypeList.map((listingType) => {
              return (
                <div key={listingType.id}>
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
                    className="mx-2 border border-solid border-green-recycle text-green-recycle px-2 py-2 rounded-lg  peer-checked:bg-green-recycle peer-checked:text-white cursor-pointer"
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
        <div className="flex items-center flex-wrap justify-center my-4">
          {listingSubCategoriesList &&
            listingSubCategoriesList.map((listingSubCategory) => {
              return (
                <div className="h-21 my-4" key={listingSubCategory.id}>
                  <input
                    id={`listing-category-${listingSubCategory.id}`}
                    type="radio"
                    name="listing-category"
                    className="peer hidden"
                    value={`listing-category-${listingSubCategory.id}`}
                    aria-label={listingSubCategory.category}
                    onClick={() => {
                      setListingSubCategoryId(listingSubCategory.id)
                    }}
                  />
                  <label
                    htmlFor={`listing-category-${listingSubCategory.id}`}
                    className="mx-2 border border-solid border-green-recycle text-green-recycle px-2 py-2 rounded-lg  peer-checked:bg-green-recycle peer-checked:text-white  my-4 cursor-pointer "
                  >
                    {listingSubCategory.category}
                  </label>
                </div>
              )
            })}
        </div>
      </div>
      <div className="flex flex-col items-center justify-center my-4">
        <p className="text-gray-recycle">Lieu de l'annonce</p>
        <input
          type="text"
          placeholder="CP"
          className="border-b-2 border-green-recycle w-72"
          maxLength={5}
          onChange={(e) => {
            setZip(e.target.value)
          }}
        />
        <input
          type="text"
          placeholder="Ville"
          className="border-b-2 border-green-recycle w-72"
          onChange={(e) => {
            setCity(e.target.value)
          }}
        />
      </div>
      <div className="flex flex-col justify-center max-w-xl mx-auto">
        <p className="text-gray-recycle">Description</p>
        <textarea
          rows={5}
          cols={33}
          className="border border-solid border-dark-blue rounded-lg max-w-xl"
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
      >
        Poster une annonce
      </button>
    </div>
  )
}
export default CreateListing
