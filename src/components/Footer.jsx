import '../styles/Footer.css'
import { Link } from 'react-router-dom'
import { AiFillInstagram, AiFillYoutube, AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook} from 'react-icons/bs'

const Footer = () => {
  return (
    <div>
       <div className="footer-wrapper">
        <footer>
            <div className="social">
              <Link><AiFillInstagram /></Link>
              <Link><AiFillYoutube /></Link>
              <Link><AiFillTwitterCircle/></Link>
              <Link><BsFacebook/></Link>
            </div>
            <ul >
                <li className="list-inline-item"><Link to='/'>Home</Link></li>
                <li className="list-inline-item"><Link to='/about'>About</Link></li>
                <li className="list-inline-item"><Link to='/feeds'>Feeds</Link></li>
            </ul>
            <p className="copyright">Edmond Amofah Boakye © 2023</p>
        </footer>
      </div>
    </div>
  )
}

export default Footer