import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import server from "./Helpers/Server";
import axios from "axios";
import swal from "sweetalert2";

const SendFile = () => {
  const { id } = useParams();
  const config = { withCredentials: true };

  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [body, setBody] = useState("");
  const [filename, setFilename] = useState("");


  //fetch file
  useEffect(() => {
    axios
      .get(`${server}/file/${id}`, config)
      .then((res) => {
        setTitle(res.data.file.title);
        setFilename(res.data.file.file);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const data ={
    email,
    message: body
  }
//send file

const handleSubmit = (e) =>{
    e.preventDefault()

    axios.post(`${server}/file/email/${filename}`, data, config).then((res)=>{
      swal.fire({
        icon: "success",
        title: `${res.data.message}`,
      })
    }).catch((error)=>{
      swal.fire({
        icon: "error",
      title: `${error.response.data.message}`
      })
    })
}

  return (
    <>
      <div className="sign-wrapper">
        <div className="signup-form-wrapper send-file">
          <form onSubmit={handleSubmit}>
            <h4>Send Files Here</h4>
            <div className="email-input">
              <input
                type="text"
                required
                value={title}
                disabled
              />
            </div>
            <div className="email-input">
              <input
                type="email"
                required
                placeholder="Enter Recepient's Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password-input">
              <textarea
                placeholder="Enter Email Message if any"
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            <div className="login-btn">
              <button>Send</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SendFile;
