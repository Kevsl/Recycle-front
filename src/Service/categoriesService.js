import axios from 'axios'
import { apiUrl } from '../url'
export async function getCategories() {
  let url = `${apiUrl}categories`

  return axios.get(url).then((res) => {
    return res.data
  })
}
