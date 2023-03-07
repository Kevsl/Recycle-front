import axios from 'axios'
import { symfoUrl } from '../url'

export async function getCategories() {
  let url = `${symfoUrl}listingCategory`

  return axios.get(url).then((res) => {
    return res.data
  })
}
export async function getSubCategoriesByCategoryId(id) {
  let url = `${symfoUrl}subCategory/category/${id}`

  return axios.get(url).then((res) => {
    return res.data
  })
}
