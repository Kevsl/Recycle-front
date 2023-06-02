import axios from 'axios'
import { config } from '../Utils/Consts'

export async function getMyConversations() {
  let url = `${
    process.env.REACT_APP_API_URL
  }conversation/byUser/${localStorage.getItem('id')}`

  return axios
    .get(url, config)

    .then((res) => {
      console.log(res.data)

      return res.data
    })
}

export async function getSpecificConversation(id) {
  let url = `${process.env.REACT_APP_API_URL}conversation/${id}`

  return axios.get(url, config).then((res) => {
    return res.data
  })
}
// Ici 
export async function sendFirstMessage(id, firstMessage) {
  let url = `${process.env.REACT_APP_API_URL}conversation/new/${id}`

  return axios.post(url,{ firstMessage : firstMessage }, config).then((res) => {
    //return res
    console.log(res);
  })
}

export async function sendMessage(fkConversation,fkUserSender,fkUserRecipient, content) {
  let url = `${process.env.REACT_APP_API_URL}message/new`

  return axios.post(url,{ fkConversation : fkConversation , fkUserSender : fkUserSender, fkUserRecipient : fkUserRecipient, content : content}, config).then((res) => {
    //return res
    console.log(res);
  })
}
