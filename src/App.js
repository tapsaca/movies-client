import './App.css'
import Header from './components/header/Header'
import Home from './components/home/Home'
import Layout from './components/Layout'
import Trailer from './components/trailer/Trailer'
import movieService from './services/movies'
import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    (async () => {
      setMovies(await movieService.getAll())
    })()
  }, [])

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home movies={movies} />} />
          <Route path='/trailer/:ytTrailerId' element={<Trailer />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App