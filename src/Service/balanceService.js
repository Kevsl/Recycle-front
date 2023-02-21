import axios from 'axios'
import { symfoUrl } from '../url'

export async function getBalance() {
  let id = localStorage.getItem('id')
  let url = `${symfoUrl}profileBalance/user/${id}`

  return axios.get(url).then((res) => {
    return res.data
  })
}
