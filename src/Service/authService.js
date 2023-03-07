import axios from 'axios'
import { apiUrl, symfoUrl } from '../url'

export async function loginFunction(email, password) {
  let url = 'http://127.0.0.1/api/login_check'

  return axios.post(url, { email: email, password: password }).then((res) => {
    console.log(res)
    localStorage.setItem('username', res.data.username)
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('avatar', res.data.avatar)
    localStorage.setItem('id', res.data.id)
    return res.status
  })
}
