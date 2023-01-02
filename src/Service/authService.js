import axios from 'axios'

export async function loginFunction(email, password) {
  let url = `${process.env.REACT_APP_API_URL}login_check`
  return axios
    .post(url, { email: email, password: password })
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      return res.status
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return error.response.status
      }
    })
}
