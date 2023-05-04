import axios from 'axios'

export async function getMyConversations(id) {
  let url = `${process.env.REACT_APP_API_URL}conversation/me/${id}`
  return axios
    .get(url)

    .then((res) => {
      return res.data
    })
}

export async function getSpecificConversation(id) {
  let url = `${process.env.REACT_APP_API_URL}conversation/${id}`

  return axios.get(url).then((res) => {
    return res.data
  })
}
