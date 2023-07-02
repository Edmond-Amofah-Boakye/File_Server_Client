import server from "./Helpers/Server";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert2";
import { Link } from "react-router-dom";
import PageNavbar from "./PageNavbar";
import "../styles/Signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    name,
    email,
    password,
  };

  //handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${server}/user`, data, { withCredentials: true })
      .then((res) => {
        swal.fire({
          icon: "success",
          title: `${res.data.message}`,
        });
        setName(" ");
        setEmail(" ");
        setPassword("");
      })
      .catch((error) => {
        swal.fire({
          icon: "error",
          title: `${error.response.data.message}`,
        });
        console.log(error);
      });
  };

  return (
    <>
      <PageNavbar />
      <div className="signup-wrapper">
        <div className="header-color"></div>
        <div className="signup-form">
          <h3>Sign Up</h3>
          <form onSubmit={handleSubmit}>
            <div className="username">
              <input
                type="text"
                placeholder="Username"
                value={name}
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="email">
              <input
                type="email"
                placeholder="Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password">
              <input
                type="password"
                minLength={6}
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="singup-btn">
              <button>Sign up</button>
            </div>
            <div className="terms">
              <p>
                Already have an account? <Link to="/signin">Login</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
