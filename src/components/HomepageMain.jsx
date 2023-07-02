import "../styles/HomepageMain.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineFilePdf, AiOutlineFileImage } from "react-icons/ai";
import { MdAudiotrack } from "react-icons/md";
import { FcVlc } from "react-icons/fc";


const HomepageMain = () => {
  return (
    <>
      <Container>
        <Row className="homepage">
          <Col md={12}>
            <h1>
              Helping Businesses succeed through <br />
              the power of file sharing
            </h1>
            <p className="home-message">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam sit a nobis, vero nulla fuga quaerat. Distinctio
              voluptates magnam reiciendis ratione molestiae incidunt,
              asperiores aut vitae ducimus aliquid numquam laboriosam obcaecati
              debitis tempora voluptate laborum nam! Quis, numquam porro
              necessitatibus error ullam iusto repudiandae, ipsa maxime
              officiis, fuga perspiciatis voluptatem.
            </p>
            <Link to="/feeds">
              <button>Explore our Files Now!!</button>
            </Link>
          </Col>
        </Row>
      </Container>
      <div className="file-types">
        <Container>
          <Row className="file-types-item">
            <Col md={3}>
              <div className="videos-icon-info">
                <div className="video-icon">
                  <MdAudiotrack style={{color: "white"}} className="file-audio-icon ic audio"/>
                </div>
                  <h4>Videos</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ipsam?</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="videos-icon-info">
                <div className="video-icon">
                 <AiOutlineFilePdf className="file-audio-icon ic pdf"/>
                </div>
                  <h4>PDF's</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ipsam?</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="videos-icon-info">
                <div className="video-icon">
                  <AiOutlineFileImage style={{color: "white"}} className="file-audio-icon ic image"/>
                </div>
                  <h4>Images</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ipsam?</p>
              </div>
            </Col>
            <Col md={3}>
              <div className="videos-icon-info audio-info">
                <div className="video-icon">
                  <FcVlc  className="file-audio-icon video"/>
                </div>
                  <h4>Audio</h4>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo, ipsam?</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomepageMain;
