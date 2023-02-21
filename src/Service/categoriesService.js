import axios from 'axios'
import { symfoUrl } from '../url'

export async function getCategories() {
  let url = `${symfoUrl}listingCategory`

  return axios.get(url).then((res) => {
    return res.data
  })
}
