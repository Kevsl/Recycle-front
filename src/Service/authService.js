import axios from 'axios'
import { apiUrl } from '../url'

export async function loginFunction(email, password) {
  let url = `${apiUrl}login`

  return axios.get(url, { email: email, password: password }).then((res) => {
    localStorage.setItem('username', res.data.username)
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('avatar', res.data.avatar)
    localStorage.setItem('id', res.data.id)
    return res.status
  })
}
