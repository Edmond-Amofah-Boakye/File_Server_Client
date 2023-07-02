import "../styles/About.css";
import Footer from "../components/Footer";
import aboutImage from "../assets/img-4.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageNavbar from "./PageNavbar";

const About = () => {
  return (
    <>
    <PageNavbar />
      <div className="about-us-wrapper">
        <Container>
          <Row className="info">
            <Col md={7}>
              <p className="about-us-head">ABOUT US</p>
              <h1>
                Helping Businesses <br /> succeed throught <br />
                the power of file sharing
              </h1>
              <p className="main-message">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Laboriosam sit a nobis, vero nulla fuga quaerat. Distinctio
                voluptates magnam reiciendis ratione molestiae incidunt,
                asperiores aut vitae ducimus aliquid numquam laboriosam
                obcaecati debitis tempora voluptate laborum nam! Quis, numquam
                porro necessitatibus error ullam iusto repudiandae, ipsa maxime
                officiis, fuga perspiciatis voluptatem.
              </p>
              <Link to="/signup">
                <button>Sign Up for Free</button>
              </Link>
            </Col>
            <Col md={5}>
              <div className="about-us-image">
                <img src={aboutImage} alt="us" />
              </div>
            </Col>
          </Row>
          <Row className="sahre-dwld">
            <Col md={7}>
              <div className="share-download-msg">
                <h2>
                  You can easily <br />
                  Dowload and Share <br />
                  Files with Business Partners
                </h2>
              </div>
              <div className="share-download-list">
                <ul>
                  <li>Video</li>
                  <li>Audio</li>
                  <li>PDF</li>
                  <li>Image</li>
                </ul>
              </div>
            </Col>
            <Col md={5}>
              <ul className="message">
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore fugiat et quos dicta totam possimus pariatur at
                  optio nulla natus.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore fugiat et quos dicta totam possimus pariatur at
                  optio nulla natus.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore fugiat et quos dicta totam possimus pariatur at
                  optio nulla natus.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Inventore fugiat et quos dicta totam possimus pariatur at
                  optio nulla natus.
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default About;
