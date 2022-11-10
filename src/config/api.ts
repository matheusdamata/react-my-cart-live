import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export default {
  getProduct: async () => {
    const response = await axios.get(`${BASE_URL}/products`)
    return response.data
  },
}
