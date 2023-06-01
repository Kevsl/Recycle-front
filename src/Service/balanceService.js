import axios from 'axios'
import { config } from '../Utils/Consts'

export async function getBalance() {
  let id = localStorage.getItem('id')
  let url = `${process.env.REACT_APP_API_URL}userBalance/${id}`

  return axios.get(url, config).then((res) => {
    return res.data
  })
}
