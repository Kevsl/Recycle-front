import axios from 'axios'

export async function getCategories() {
  let url = `http://0.0.0/api/listing_categories`
  let token = localStorage.getItem('token')

  let config = {
    headers: {
      Authorization: 'Bearer ' + token,
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',
    },
  }
  return axios
    .get(url, config)
    .then((res) => {
      return res.data['hydra:member']
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return error.response.status
      }
    })
}
