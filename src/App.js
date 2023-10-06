import './App.css'
import movieService from './services/movies'
import { useEffect, useState } from 'react'

const App = () => {
  const [movies, setMovies] = useState()

  useEffect(() => {
    (async () => {
      setMovies(await movieService.getAll())
    })()
  }, [])

  return (
    <div></div>
  )
}

export default App