import React, { useState } from 'react'
import { FooterMenu } from '../Components/FooterMenu'
import { CategoryMenu } from '../Components/Layouts/CategoryMenu'
import { Footer } from '../Components/Layouts/Footer'
import { Header } from '../Components/Layouts/Header'
import { createListing } from '../Service/listingService'
import { AcceptMaxFiles } from '../Utils/dragNDrop'

const CreateListing = () => {
  const [zip, setZip] = useState('')
  const [city, setCity] = useState('')
  const [description, setDescription] = useState('')
  const [title, setTitle] = useState('')
  const [listingTypeId, setListingTypeId] = useState('')
  const [listingSubTypeId, setListingSubTypeId] = useState(1)
  const [listingCategoryId, setListingCategoryId] = useState('')
  const [listingSubCategoryId, setListingSubCategoryId] = useState('')

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

  return (
    <div>
      <Header />
      <div className="flex flex-col justify-center w-5/6 mx-auto font-Baloo max-w-xl border border-solid px-4 py-4 rounded-xl my-4 border-green-recycle mt-28">
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
        </div>
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
      <Footer />
      <FooterMenu />
    </div>
  )
}
export default CreateListing
