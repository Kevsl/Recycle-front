import axios from 'axios'

import { symfoUrl } from '../url'
export async function getListings() {
  let url = `${symfoUrl}listing`

  return axios.get(url).then((res) => {
    return res.data
  })
}
