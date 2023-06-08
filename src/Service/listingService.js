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
  let url = `${process.env.REACT_APP_API_URL}listing/view/${id}`

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
  formData
) {
  let url = `${'http://127.0.0.1/'}listing/new2`
  let id = localStorage.getItem('id')

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'multipart/form-data',
    },
  }

  formData.append('city', city)
  formData.append('country', 'France')
  formData.append('description', description)
  formData.append('title', title)
  formData.append('fkSubCategory', listingSubCategoryId)
  formData.append('fkListingStatus', 1)
  formData.append('fkListingType', listingTypeId)
  formData.append('fkUser', localStorage.getItem('id'))
  formData.append('longitude', longitude)
  formData.append('latitude', latitude)
  formData.append('postCode', postCode)

  return axios.post(url, formData, config).then((res) => {
    return res.status
  })
}
export async function getCitiesList(id) {
  let url = `https://api-adresse.data.gouv.fr/search/?q=${id}&type=municipality`

  return axios.get(url, config).then((res) => {
    return res.data.features
  })
}
export async function deleteListing(id) {
  let url = `${process.env.REACT_APP_API_URL}listing/${id}`

  return axios.delete(url, config).then((res) => {
    return res.data
  })
}
