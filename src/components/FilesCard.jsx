/* eslint-disable react/prop-types */
import "../styles/FilesCard.css";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import server from './Helpers/Server'
import { Link, } from "react-router-dom";
import viewIcon from "./Helpers/FileRender";
import axios from "axios";



const FilesCard = ({ files }) => {

 //configuration
 const config = {headers:{
  "Authorization": `Bearer ${localStorage.getItem("token")}`
}}
  
  //handle file dowmload
  const handleDownload = (filename) =>{
      axios.get(`${server}/file/downloads/${filename}`, config, {responseType: "blob"})
        .then((response)=>{
          const blob = new Blob([response.data], {type: response.headers["content-type"]})
          const fileURL = URL.createObjectURL(blob)

          const link = document.createElement('a')
          link.href = fileURL
          link.download = filename
          link.click();
          
        }).catch((error)=>{
          console.log(error)
        })
  }

  //handle file preview
  const handlePreview = (filename) =>{
      fetch(`${server}/file/preview/${filename}`)
      .then(response => response.blob())
      .then(blob => {
        const fileURL = URL.createObjectURL(blob);
        window.open(fileURL)
      })
      .catch(error => {
        // Handle error
        console.error('Error fetching file:', error);
      });

  }
  return (
    <Row>
      {files.map((el) => {
        return (
          <Col md={4} lg={3} className="file-card" key={el._id}>
            <Card className="shadow card-wrapper ">
              <Card.Header className="file-card-header">{el.title}</Card.Header>
              <Card.Body>
                <Card.Text className="all-files-icons" onClick={()=>handlePreview(el.filename)}>
                  {viewIcon(el.type)}
                </Card.Text>
                <div className="mb-4">{el.description}</div>
                <div className="share-downoad">
                  <Link to={`/file/send/email/${el._id}`}>
                    <button className="share-btn  w-100">
                      Share File
                    </button>
                  </Link>
                  <button className="download-btn  w-100" onClick={()=>handleDownload(el.filename)}>
                    Download
                  </button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
};

export default FilesCard;
