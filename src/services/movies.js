import axios from 'axios'

const baseURL = 'http://localhost:8080/api/movies'

const getAll = async () => {
  const response = await axios.get(baseURL)
  return response.data
}

export default { getAll }