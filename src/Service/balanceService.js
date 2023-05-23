import axios from 'axios'

export async function getBalance() {
  let id = localStorage.getItem('id')
  let url = `${process.env.REACT_APP_API_URL}userBalance/${id}`

  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
  }

  return axios.get(url, config).then((res) => {
    return res.data
  })
}
