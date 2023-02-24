import axios from 'axios'
import { symfoUrl } from '../url'

export async function getListings() {
  let url = `${symfoUrl}listing`

  return axios.get(url).then((res) => {
    return res.data
  })
}

export async function getListing(id) {
  let url = `${symfoUrl}listing/${id}`

  return axios.get(url).then((res) => {
    console.log(res.data)
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

export async function createListing(
  title,
  listingTypeId,
  listingCategoryId,
  listingSubTypeId,
  zip,
  city,
  description
) {
  let url = `${symfoUrl}listing/new`

  return axios
    .post(
      url,

      {
        city: city,
        street: 'test',
        country: 'test',
        description: description,
        title: title,
        fkListingCategory: 1,
        fkListingStatus: 1,
        fkListingType: 1,
        fkProfile: localStorage.getItem('id'),
        gpsCoordinates: 1,
        postCode: 24322,
        streetName: 'Test',
        streetNumber: 1,
      }
    )
    .then((res) => {
      return res.status
    })
}
