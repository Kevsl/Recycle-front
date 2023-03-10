import axios from 'axios'
import { symfoUrl } from '../url'

export async function getMyConversations(id) {
  let url = `${symfoUrl}conversation/me/${id}`
  return axios.get(url).then((res) => {
    return res.data
  })
}

export async function getSpecificConversation(id) {
  let url = `${symfoUrl}conversation/${id}`

  return axios.get(url).then((res) => {
    return res.data
  })
}
