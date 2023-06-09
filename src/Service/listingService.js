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
  return axios.get(url).then((res) => {
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
  longitude,
  latitude,
  files
) {
  let url = `${process.env.REACT_APP_API_URL}listing/new`
  let id = localStorage.getItem('id')
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  }

  return axios
    .post(
      url,

      {
        city: city,
        country: 'France',
        description: description,
        title: title,
        fkSubCategory: listingSubCategoryId,
        fkListingStatus: 1,
        fkListingType: listingTypeId,
        fkSubListingType: listingSubTypeId,
        fkProfile: id,
        latitude: latitude,
        longitude: longitude,
        postCode: postCode,
        fkUser: localStorage.getItem('id'),
        images: files,
      },
      config
    )
    .then((res) => {
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
