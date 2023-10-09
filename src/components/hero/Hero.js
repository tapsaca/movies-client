import './Hero.css'
import { Paper } from '@mui/material'
import Carousel from 'react-material-ui-carousel'

const Hero = ({ movies }) => {
  return (
    <div>
      <Carousel>
        {
          movies.map((movie) => {
            return (
              <Paper key={movie.imdbId}>
                <div className='movie-card-container'>
                  <div className='movie-card' style={{'--img': `url(${movie.backdrops[0]})`}}>
                    <div className='movie-detail'>
                      <div className='movie-poster'>
                        <img src={movie.poster} alt='' />
                      </div>
                      <div className='movie-title'>
                        <h4>{movie.title}</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </Paper>
            )
          })
        }
      </Carousel>
    </div>
  )
}

export default Hero