import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: {
    Authorization: 'Client-ID pVilfSiIcQfl5uILfi42UkAnc9qDzWOjzHYNEjQLftk'
  }
})
