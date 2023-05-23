import axios from 'axios'

export async function getListings() {
  const config = {
    headers: { Authorization: `${localStorage.getItem('token')}` },
  }

  let url = `${process.env.REACT_APP_API_URL}listing/images`
  return axios.get(url, config).then((res) => {
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
  const config = {
    headers: { Authorization: `${localStorage.getItem('token')}` },
  }
  return axios
    .post(
      url,
      {
        fkListingType: listingTypeId,
        fkSubType: listingSubTypeId,
        fkListingCategory: listingCategoryId,
        fkSubCategory: listingSubCategoryId,
        latitude: latitude,
        longitude: longitude,
        round: round,
      },
      config
    )
    .then((res) => {
      return res.data
    })
}

export async function getListing(id) {
  let url = `${process.env.REACT_APP_API_URL}listing/${id}`
  const config = {
    headers: { Authorization: `${localStorage.getItem('token')}` },
  }
  return axios.get(url, config).then((res) => {
    return res.data
  })
}
export async function getListingTypes() {
  let url = `${process.env.REACT_APP_API_URL}listingType`
  const config = {
    headers: { Authorization: `${localStorage.getItem('token')}` },
  }
  return axios.get(url, config).then((res) => {
    return res.data
  })
}

export async function getListingCategories() {
  const config = {
    headers: { Authorization: `${localStorage.getItem('token')}` },
  }
  let url = `${process.env.REACT_APP_API_URL}listingCategory`
  return axios.get(url, config).then((res) => {
    return res.data
  })
}
export async function getListingByCategory(id) {
  let url = `${process.env.REACT_APP_API_URL}listing/images/category/${id}`
  const config = {
    headers: { Authorization: `${localStorage.getItem('token')}` },
  }

  return axios.get(url, config).then((res) => {
    return res.data
  })
}

export async function getMyListings(id) {
  let url = `${process.env.REACT_APP_API_URL}listing/me/${id}`
  const config = {
    headers: { Authorization: `${localStorage.getItem('token')}` },
  }

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
  longitude
) {
  let url = `${process.env.REACT_APP_API_URL}listing/new`
  let id = localStorage.getItem('id')
  const config = {
    headers: { Authorization: `${localStorage.getItem('token')}` },
  }

  return axios
    .post(
      url,

      {
        city: city,
        street: 'to remove',
        country: 'France',
        description: description,
        title: title,
        fkListingCategory: listingCategoryId,
        fkListingSubCategory: listingSubCategoryId,
        fkListingStatus: 1,
        fkListingType: listingTypeId,
        fkSubListingType: listingSubTypeId,
        fkProfile: id,
        latitude: latitude,
        longitude: longitude,
        postCode: postCode,
        streetName: 'to remove',
        streetNumber: 1,
        fkUser: localStorage.getItem('id'),
      },
      config
    )
    .then((res) => {
      return res.status
    })
}
export async function getCitiesList(id) {
  let url = `https://api-adresse.data.gouv.fr/search/?q=${id}&type=municipality`
  const config = {
    headers: { Authorization: `${localStorage.getItem('token')}` },
  }
  return axios.get(url, config).then((res) => {
    console.log(res.data.features)
    return res.data.features
  })
}
