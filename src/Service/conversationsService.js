import axios from 'axios'
import { config } from '../Utils/Consts'

export async function getMyConversations(id) {
  let url = `${process.env.REACT_APP_API_URL}conversation/byUser/${id}`

  return axios
    .get(url, config)

    .then((res) => {
      return res
    })
    .catch((e) => e)
}

export async function getSpecificConversation(id) {
  let url = `${process.env.REACT_APP_API_URL}conversation/${id}`

  return axios.get(url, config).then((res) => {
    return res.data
  })
}
export async function sendFirstMessage(id, firstMessage) {
  let url = `${process.env.REACT_APP_API_URL}conversation/new/${id}`

  return axios.post(url, { firstMessage: firstMessage }, config)
}

export async function sendMessage(
  fkConversation,
  fkUserSender,
  fkUserRecipient,
  content
) {
  let url = `${process.env.REACT_APP_API_URL}message/new`

  return axios.post(
    url,
    {
      fkConversation: fkConversation,
      fkUserSender: fkUserSender,
      fkUserRecipient: fkUserRecipient,
      content: content,
    },
    config
  )
}
