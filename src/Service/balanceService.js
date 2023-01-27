import axios from 'axios'
import { apiUrl } from '../url'

export async function getBalance() {
  let url = `${apiUrl}/balance`

  return axios.get(url).then((res) => {
    return res.data
  })
}
