import { useContext } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import "../../styles/Admin/Users.css";
import { Context } from "../../store/AppContext";
import axios from "axios";
import swal from "sweetalert2";
import server from "../Helpers/Server";

const Users = () => {
  const { getUsers, setGetUsers } = useContext(Context);

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
            .delete(`${server}/user/${id}`, { withCredentials: true })
            .then(() => {
              swal.fire({
                icon: "success",
                title: `Successfully deleted`,
              });
              setGetUsers(getUsers.filter((e) => e._id !== id));
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

  return (
    <>
      <div className="overview">
        <Container>
          <div className="user"></div>
          <h1 className="records">
            <span>ALL</span> RECORDS
          </h1>
          <h4 className="user-header">All Users</h4>
          <Row className="feeds-row-1">
            <Col md={9}>
              <h4 className="num-files">{getUsers.length} User(s)</h4>
            </Col>
          </Row>
            <Table striped responsive>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Active</th>
                  <th>Confirmed</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {getUsers.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td>1</td>
                      <td>{item.name}</td>
                      <td>{item.email}</td>
                      <td>{item.role}</td>
                      <td>{item.active.toString()}</td>
                      <td>{item.confirmed.toString()}</td>
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
        </Container>
      </div>
    </>
  );
};

export default Users;
