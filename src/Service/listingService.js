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
