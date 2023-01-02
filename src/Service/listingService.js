import axios from 'axios'

export async function getListings() {
  let url = `${process.env.REACT_APP_API_URL}listings`
  let token = localStorage.getItem('token')

  let config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  }
  return axios
    .get(url, config)
    .then((res) => {
      return res.data['hydra:member']
    })
    .catch(function (error) {
      if (error.response) {
        return error.response.status
      }
    })
}
