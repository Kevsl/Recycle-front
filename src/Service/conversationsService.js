import axios from 'axios'

export async function getMyConversations(id) {
  let url = `${process.env.REACT_APP_API_URL}conversation/me/${id}`
  const config = {
    headers: { Authorization: `${localStorage.getItem('token')}` },
  }
  return axios
    .get(url, config)

    .then((res) => {
      return res.data
    })
}

export async function getSpecificConversation(id) {
  let url = `${process.env.REACT_APP_API_URL}conversation/${id}`
  const config = {
    headers: { Authorization: `${localStorage.getItem('token')}` },
  }

  return axios.get(url, config).then((res) => {
    return res.data
  })
}
