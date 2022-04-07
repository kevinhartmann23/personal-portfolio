import landingPhoto from '../../Assets/images/kev_dev.png'
import './Poster.css'

const Poster = () => {
  return (
    <div className="poster-container">
      <img className="poster" src={landingPhoto} alt="Kevin Hartmann Intro" />
    </div>
  )
}

export default Poster
