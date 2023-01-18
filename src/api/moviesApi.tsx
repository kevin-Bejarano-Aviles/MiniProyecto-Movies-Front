import axios from 'axios';
export const moviesApi = axios.create({
  baseURL:'http://localhost:8000'
})
export const giftApi = axios.create({
  baseURL:`https://api.giphy.com/v1/gifs`
})
export const key = 'ndKXiVGvTPmmavkpeKS0bheQaFr4HdKU';