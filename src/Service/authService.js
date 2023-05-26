import axios from 'axios'
import jwt_decode from 'jwt-decode'

export async function login(email, password) {
  let url = `${process.env.REACT_APP_API_URL}api/login_check`
  let axiosConfig = {
    headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  }
  return axios
    .post(
      url,
      {
        username: email,
        password: password,
      },
      axiosConfig
    )
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
  const config = {
    headers: {
      Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImN0eSI6IkpXVCJ9.eyJpYXQiOjE2ODQ5ODk2NDksImV4cCI6MTY4NTA3NjA0OSwicm9sZXMiOlsiUk9MRV9BRE1JTiIsIlJPTEVfVVNFUiJdLCJlbWFpbCI6ImFsZXhpcy5jYXJyZXJlQGdtYWlsLmNvbSIsImlkIjoxLCJwc2V1ZG8iOiJBbGV4aXMiLCJhdmF0YXIiOjV9.rrgA5xMEeo-z4BLBFSDbzTJPBIaU4yWIJ8eIl7gQCU1JWFNZpV1MQyJHCFMDAFYgDtVyfhDZ08IYxuVv_pTNN00yedMJ0oT7NV9p-7uoApJnJj5AcIbU2yIrhEdH9oujZbzyL3ORH1cFPsQb3hCQewmj0da7pm45ebx0XdoVf9neDO3lp1Hfn9MB_TIsx1e2XI7-19A0zhsQLcJtgOVFGy5PHhvHgODVFy-GljfNstNro3kVna5dcn7pFCRzS-4Ug6F-OyRG9rA2vrYKR8viSrqKma6SX6pU7ktB1flIc_DF6thGIbYkd7VsBDHBIvRu0_yuZIvcbdDjyhMs-Nl4kg`,
    },
  }

  let url = `${process.env.REACT_APP_API_URL}avatar`

  return axios.get(url, config).then((res) => {
    return res.data
  })
}
