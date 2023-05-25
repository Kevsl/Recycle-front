import axios from 'axios'

export async function getMyConversations() {
  let url = `${
    process.env.REACT_APP_API_URL
  }conversation/me/${localStorage.getItem('id')}`
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  }
  return axios
    .get(url, config)

    .then((res) => {
      console.log(res.data)
      return res.data
    })
}

export async function getSpecificConversation(id) {
  let url = `${process.env.REACT_APP_API_URL}conversation/${id}`
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  }

  return axios.get(url, config).then((res) => {
    return res.data
  })
}
