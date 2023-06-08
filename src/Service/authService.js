import axios from 'axios'
import jwt_decode from 'jwt-decode'

export async function login(email, password) {
  let url = `${process.env.REACT_APP_API_URL}api/login_check`

  return axios
    .post(url, {
      username: email,
      password: password,
    })
    .then((res) => {
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('id', jwt_decode(res.data.token).id)
      localStorage.setItem('roles', jwt_decode(res.data.token).roles)

      return res
    })
    .catch((err) => {
      return err
    })
}

export async function register(email, password, pseudo, avatar) {
  let url = `${process.env.REACT_APP_API_URL}api/register`

  return axios
    .post(url, {
      email: email,
      password: password,
      pseudo: pseudo,
      avatar: avatar,
    })
    .then((res) => {
      return res
    })
    .catch((err) => {
      return err
    })
}

export async function getAllAvatars() {
  let url = `${process.env.REACT_APP_API_URL}avatar`

  return axios.get(url).then((res) => {
    return res.data
  })
}
