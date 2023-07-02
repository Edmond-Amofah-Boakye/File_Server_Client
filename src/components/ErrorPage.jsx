import errorImage from '../assets/404-error.avif'
import '../styles/ErrorPage.css'
import { Link } from 'react-router-dom'


const ErrorPage = () => {
  return (
    <>
        <div className="error-wrapper">
            <div className="error-message">
                <h1>Page  <br /> Not Found</h1>
                <p>Lorem ipsum dolor sit amet consectetur, 
                    adipisicing elit. Cumque, delectus amet? Fugit suscipit 
                    cum atque aliquid, esse blanditiis odio neque.
                </p>
                <button><Link to="/signin">Go Back</Link></button>
            </div>
            <div className="error-image">
                <img src={errorImage} alt="error-image" />
            </div>
        </div>
    </>
  )
}

export default ErrorPage