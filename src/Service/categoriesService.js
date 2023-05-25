import axios from 'axios'

export async function getCategories() {
  let url = `${process.env.REACT_APP_API_URL}listingCategory`
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  }
  return axios.get(url, config).then((res) => {
    return res.data
  })
}
export async function getSubCategoriesByCategoryId(id) {
  let url = `${process.env.REACT_APP_API_URL}subCategory/category/${id}`
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  }

  return axios.get(url, config).then((res) => {
    return res.data
  })
}
