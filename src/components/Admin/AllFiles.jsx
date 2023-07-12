/* eslint-disable react/prop-types */
import { Container, Row, Col, Table } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";
import {
  AiFillEye,
  AiFillDelete,
  AiFillEdit,
  AiOutlineSend,
} from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";
import swal from "sweetalert2";
import server from "../Helpers/Server";
import { Context } from "../../store/AppContext";
import { useContext } from "react";
import "../../styles/Admin/Users.css";

const AllFiles = () => {
  const { getFiles, search, setGetFiles } = useContext(Context);
  //configuration
   const config = {headers:{
    "Authorization": `Bearer ${localStorage.getItem("token")}`
  }}
  //handle file preview
  const handlePreview = (filename) => {
    fetch(`${server}/file/preview/${filename}`)
      .then((response) => response.blob())
      .then((blob) => {
        const fileURL = URL.createObjectURL(blob);
        window.open(fileURL);
      })
      .catch((error) => {
        // Handle error
        console.error("Error fetching file:", error);
      });
  };

  //handle delete
  const handleDelete = (id) => {
    swal
      .fire({
        title: "Are you sure you want to Delete",
        text: "File deleted cannot be recovered",
        icon: "question",
        showCancelButton: true,
        confirmButtonText: "Yes Delete",
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "No, cancel",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(`${server}/file/${id}`, config)
            .then(() => {
              swal.fire({
                icon: "success",
                title: `Successfully deleted`,
              });
              setGetFiles(getFiles.filter((e) => e._id !== id));
            })
            .catch((error) => {
              swal.fire({
                icon: "error",
                title: `${error.response.data.message}`,
              });
              console.log(error);
            });
        }
      });
  };

  //search
  let files = getFiles;
  files = getFiles.filter((file) => {
    return file.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <div className="overview">
        <Container>
          <div className="user">
            <Link to="/files/add">
              <button>Add File</button>
            </Link>
          </div>
          <h1 className="records">
            <span>ALL</span> RECORDS
          </h1>
          <h4 className="file-header">All Files</h4>
          <Row className="feeds-row-1">
            <Col md={9}>
              <h4 className="num-files">{getFiles.length} File(s)</h4>
            </Col>
          </Row>
          {files.length == 0 ? (
            <p
              style={{
                textAlign: "center",
                fontSize: "2rem",
                fontStyle: "italic",
                color: "blue"
              }}
            >
              No files found
            </p>
          ) : (
            <Table striped responsive>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Title</th>
                  <th>Description</th>
                  <th>
                    <TfiEmail className="statistics-icon" />
                  </th>
                  <th>
                    <FiDownload />
                  </th>
                  <th>View</th>
                  <th>Send</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {files.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td>1</td>
                      <td>{item.title}</td>
                      <td>{item.description}</td>
                      <td>{item.emails}</td>
                      <td>{item.downloads}</td>
                      <td>
                        <AiFillEye
                          className="action-icon action-view"
                          onClick={() => handlePreview(item.filename)}
                        />
                      </td>
                      <td>
                        <Link to={`/file/send/email/${item._id}`}>
                          <AiOutlineSend className="action-icon action-send" />
                        </Link>
                      </td>
                      <td>
                        <Link to={`/file/edit/${item._id}`}>
                          <AiFillEdit className="action-icon action-edit" />
                        </Link>
                      </td>
                      <td>
                        <AiFillDelete
                          className="action-icon action-delete"
                          onClick={() => handleDelete(item._id)}
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          )}
        </Container>
      </div>
    </>
  );
};

export default AllFiles;
