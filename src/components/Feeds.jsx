import "../styles/Feeds.css";
import { useState, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Context } from "../store/AppContext";
import FilesCard from "./FilesCard";
import PageNavbar from "./PageNavbar";

function Feeds() {
  const { getFiles } = useContext(Context);
  const [search, setSearch] = useState("");

  let files;

  files = getFiles.filter((el) => {
    return el.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <PageNavbar />
      <div className="feeds">
        <div className="feeds-head">
          <h1 className="l">We've got you covered</h1>
          <p>
            <span>D</span>ownload and Share all Kind of Files through <br />
            <span> E</span>mail to your business partners
          </p>
        </div>
        <Container>
          <h1 className="all-files">All Files</h1>
          <Row className="feeds-row-1">
            <Col md={8}>
              <h4 className="num-files">{files.length} File(s)</h4>
            </Col>
          </Row>
          <hr />
          <div className="search">
            <input
              type="text"
              value={search}
              placeholder="search for files here"
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <hr />
          {files.length == 0 ? (
            <p  style={{
              textAlign: "center",
              fontSize: "1.6rem",
              fontStyle: "italic",
              color: "blue"
            }}>
              No files found
            </p>
          ) : (
            <FilesCard files={files} />
          )}
        </Container>
      </div>
    </>
  );
}

export default Feeds;
