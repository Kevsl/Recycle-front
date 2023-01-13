import axios from 'axios'
import { apiUrl } from '../url'
export async function getListings() {
  let url = `${apiUrl}listings`

  return axios.get(url).then((res) => {
    return res.data
  })
}
