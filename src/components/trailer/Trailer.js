import './Trailer.css'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'

const Trailer = () => {
  const params = useParams()
  const key = params.ytTrailerId

  return (
    <div className='react-player-container'>
      {key != null
        ? <ReactPlayer controls='true' playing={true} url={`https://youtube.com/watch?v=${key}`} height='100%' width='100%' />
        : null
      }
    </div>
  )
}

export default Trailer