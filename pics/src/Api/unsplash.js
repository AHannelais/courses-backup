import axios from 'axios'
export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID b2b7f23ff09b72ae0a4daca4acbe156603d72b7da6edd058bccd8930b3d0c46e'
  }
})
