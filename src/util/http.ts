import axios from 'axios'

export const http = axios.create({
  baseURL: 'https://steam-store-clone.vercel.app'
})