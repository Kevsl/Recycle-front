import axios from 'axios'
import { config } from '../Utils/Consts'

export async function getListings() {
  let url = `${process.env.REACT_APP_API_URL}listing/images`
  return axios.get(url).then((res) => {
    return res.data
  })
}
export async function getCustomListings(
  listingTypeId,
  listingSubTypeId,
  listingCategoryId,
  listingSubCategoryId,
  latitude,
  longitude,
  round
) {
  let url = `${process.env.REACT_APP_API_URL}listing/search`

  return axios
    .post(url, {
      fkListingType: listingTypeId,
      fkSubType: listingSubTypeId,
      fkListingCategory: listingCategoryId,
      fkSubCategory: listingSubCategoryId,
      latitude: latitude,
      longitude: longitude,
      round: round,
    })
    .then((res) => {
      return res.data
    })
}

export async function getListing(id) {
  let url = `${process.env.REACT_APP_API_URL}listing/${id}`

  return axios.get(url).then((res) => {
    return res.data
  })
}
export async function getListingTypes() {
  let url = `${process.env.REACT_APP_API_URL}listingType`

  return axios.get(url, config).then((res) => {
    return res.data
  })
}

export async function getListingCategories() {
  let url = `${process.env.REACT_APP_API_URL}listingCategory`
  return axios.get(url, config).then((res) => {
    return res.data
  })
}
export async function getListingByCategory(id) {
  let url = `${process.env.REACT_APP_API_URL}listing/images/category/${id}`

  return axios.get(url, config).then((res) => {
    return res.data
  })
}

export async function getMyListings(id) {
  let url = `${process.env.REACT_APP_API_URL}listing/me/${id}`

  return axios.get(url, config).then((res) => {
    return res.data
  })
}
export async function createListing(
  title,
  description,
  listingTypeId,
  listingSubTypeId,
  listingCategoryId,
  listingSubCategoryId,
  postCode,
  city,
  latitude,
  longitude,
  files
) {
  let url = `${process.env.REACT_APP_API_URL}listing/new`
  let id = localStorage.getItem('id')

  const config2 = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'multipart/form-data',
    },
  }

  const formData = new FormData()
  formData.append('city', city)
  formData.append('country', 'France')
  formData.append('description', description)
  formData.append('title', title)
  formData.append('fkSubCategory', listingSubCategoryId)
  formData.append('fkListingStatus', 1)
  formData.append('fkListingType', listingTypeId)
  formData.append('fkSubListingType', listingSubTypeId)
  formData.append('fkProfile', id)
  formData.append('latitude', latitude)
  formData.append('longitude', longitude)
  formData.append('postCode', postCode)
  formData.append('fkUser', localStorage.getItem('id'))

  // Check if files is an array and append each file to formData
  if (Array.isArray(files)) {
    files.forEach((file, index) => {
      formData.append(`images[${index}]`, file)
    })
  } else if (files) {
    formData.append('images[0]', files)
  }

  return axios.post(url, formData, config2).then((res) => {
    return res.status
  })
}

export async function getCitiesList(id) {
  let url = `https://api-adresse.data.gouv.fr/search/?q=${id}&type=municipality`

  return axios.get(url, config).then((res) => {
    return res.data.features
  })
}
