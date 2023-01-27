import axios from 'axios'
import { apiUrl } from '../url'

export async function getConversations() {
  let url = `${apiUrl}userHasConversations`

  return axios.get(url).then((res) => {
    return res.data
  })
}
export async function getSpecificConversation(id) {
  let url = `${apiUrl}conversation/${id}`

  return axios.get(url).then((res) => {
    return res.data
  })
}
