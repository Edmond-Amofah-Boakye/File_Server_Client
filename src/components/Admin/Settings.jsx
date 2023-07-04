import "../../styles/Admin/Settings.css";
import defaultImage from "../../assets/default.avif";
import server from "../Helpers/Server";
import { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert2";
import { useNavigate } from 'react-router-dom';
import { AiOutlineFileImage } from "react-icons/ai";

const Settings = () => {
const navigate = useNavigate();
//configuration
 const config = {headers:{
  "Authorization": `Bearer ${localStorage.getItem("token")}`
}}

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");

  useEffect(() => {
    axios
      .get(`${server}/auth/me`, config)
      .then((res) => {
        setName(res.data.user.name);
        setEmail(res.data.user.email);
        setFile(res.data.user.picture);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("image", file);

   
      axios.patch(`${server}/auth/edit/me`, formData, config).then((res) => {
        swal.fire({
          icon: "success",
          title: `${res.data.message}`,
        });
          navigate("/admin/dashboard/users")
      }).catch((error)=>{
        swal.fire({
          icon: "error",
          title: `${error.response.data.message}`,
        });
      })
    } 
     
  return (
    <>
      <div className="settings">
        <div className="signup-wrapper">
          <div className="header-color">
            <h1 className="account-settings">Account Settings</h1>
            <img src={defaultImage} alt="" />
          </div>
          <div className="signup-form">
            <form onSubmit={handleSubmit}>
              <div className="username">
                <input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="email">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="file">
                <label className="mb-4 text-primary" htmlFor="choose-image">
                  Select File <AiOutlineFileImage />
                </label>
                <input
                  type="file"
                  id="choose-image"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
              <div className="singup-btn">
                <button>Save Settings</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
