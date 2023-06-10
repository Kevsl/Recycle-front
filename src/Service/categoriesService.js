import axios from 'axios'
import { config } from '../Utils/Consts'

export async function getCategories() {
  let url = `${process.env.REACT_APP_API_URL}listingCategory`

  return axios.get(url).then((res) => {
    return res.data
  })
}
export async function getSubCategoriesByCategoryId(id) {
  let url = `${process.env.REACT_APP_API_URL}subCategory/category/${id}`

  return axios.get(url, config).then((res) => {
    return res.data
  })
}
