import './App.css'
import api from './api/axiosConfig'
import { useEffect, useState } from 'react'

const App = () => {
  const [movies, setMovies] = useState()

  const getMovies = async () => {
    try {
      const response = await api.get('/api/movies')
      console.log(response.data)
      setMovies(response.data)
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div></div>
  )
}

export default App