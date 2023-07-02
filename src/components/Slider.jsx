import firstImage from '../assets/img-1.jpg'
import secondtImage from '../assets/img-2.jpg'
import thirdImage from '../assets/img-3.jpg'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom"

function Slider() {
  return (
    <Carousel fade>
      <Carousel.Item className='ct'>
        <img
          className="d-block w-100"
          src={firstImage}
          alt="First slide"
        />
        <Carousel.Caption className='c-caption'>
          <h3>Download and Share Files for Free</h3>
          <p>Saty in touch and in shape with periodic tips from our experts on wellness, fitness and nutrition</p>
          <div className="c-msg">
             <Link to='/signup'><button className='read'>Sign Up for Free</button></Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='ct'>
        <img
          className="d-block w-100"
          src={secondtImage}
          alt="Second slide"
        />

        <Carousel.Caption className='c-caption'>
        <h3>Get All Files at one place</h3>
          <p>Saty in touch and in shape with periodic tips from our experts on wellness, fitness and nutrition</p>
          <div className="c-msg">
            <Link to='/signup'><button className='read'>Sign Up for Free</button></Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='ct'>
        <img
          className="d-block w-100"
          src={thirdImage}
          alt="Third slide"
        />

        <Carousel.Caption className='c-caption'>
        <h3>Sign Up for free and start now !!!</h3>
          <p>Saty in touch and in shape with periodic tips from our experts on wellness, fitness and nutrition</p>
          <div className="c-msg">
            <Link to='/signup'><button className='read'>Sign Up for Free</button></Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;