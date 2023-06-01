import axios from 'axios'
import { config } from '../Utils/Consts'

export async function getMyConversations() {
  let url = `${
    process.env.REACT_APP_API_URL
  }conversation/byUser/${localStorage.getItem('id')}`

  return axios
    .get(url, config)

    .then((res) => {
      return res.data
    })
}

export async function getSpecificConversation(id) {
  let url = `${process.env.REACT_APP_API_URL}conversation/${id}`

  return axios.get(url, config).then((res) => {
    return res.data
  })
}
