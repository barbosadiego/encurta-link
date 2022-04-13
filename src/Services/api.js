import axios from "axios";
export const key = '9948ba69127c57da8ee60c0253427eeb5f28b245'

const api = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: {
    'Authorization':`Bearer ${key}`
  }
})

export default api