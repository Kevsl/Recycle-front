import axios from 'axios'
import { symfoUrl } from '../url'

export async function getListings() {
  let url = `${symfoUrl}listing/images`
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
  let url = `${symfoUrl}listing/search`
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
  let url = `${symfoUrl}listing/${id}`
  return axios.get(url).then((res) => {
    return res.data
  })
}
export async function getListingTypes() {
  let url = `${symfoUrl}listingType`
  return axios.get(url).then((res) => {
    return res.data
  })
}

export async function getListingCategories() {
  let url = `${symfoUrl}listingCategory`
  return axios.get(url).then((res) => {
    return res.data
  })
}
export async function getListingByCategory(id) {
  let url = `${symfoUrl}listing/images/category/${id}`

  return axios.get(url).then((res) => {
    return res.data
  })
}

export async function getMyListings(id) {
  let url = `${symfoUrl}listing/me/${id}`

  return axios.get(url).then((res) => {
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
  coordinates
) {
  let url = `${symfoUrl}listing/new`

  return axios
    .post(
      url,

      {
        city: city,
        street: 'test',
        country: 'France',
        description: description,
        title: title,
        fkListingCategory: listingCategoryId,
        fkListingStatus: 1,
        fkListingType: listingTypeId,
        fkSubListingType: listingSubTypeId,
        fkProfile: 1,
        gpsCoordinates: coordinates,
        postCode: postCode,
        streetName: 'to remove',
        streetNumber: 1,
      }
    )
    .then((res) => {
      return res.status
    })
}
export async function getCitiesList(id) {
  let url = `https://api-adresse.data.gouv.fr/search/?q=${id}&type=municipality`
  return axios.get(url).then((res) => {
    return res.data.features
  })
}
