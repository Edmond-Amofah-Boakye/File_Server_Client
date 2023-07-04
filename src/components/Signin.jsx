import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import server from "./Helpers/Server";
import axios from "axios";
import swal from "sweetalert2";
import PageNavBar from './PageNavbar'
import "../styles/Signin.css";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = {
    email,
    password,
  };

  //handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${server}/auth/login`, data)
      .then((res) => {
        localStorage.setItem("role", res.data.role)
        localStorage.setItem("token", res.data.token)
        //delay for 2 seconds
        setTimeout(() => {
          swal.fire({
            icon: "success",
            title: `${res.data.message}`,
            timer: 4000,
          });
        }, 1000);
        res.data.role === "admin"
          ? navigate("/admin/dashboard", {replace: true})
          : navigate("/feeds", {replace: true});
      })
      .catch((error) => {
        swal.fire({
          icon: "error",
          title: `${error.response.data.message}`,
        });
      });
  };

  return (
    <>
    <PageNavBar />
      <div className="sign-wrapper">
      <div className="header-color"></div>
        <div className="signup-form-wrapper">
          <form onSubmit={handleSubmit}>
            <h4>Login Here</h4>
            <div className="email-input">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password-input">
              <input
                type="password"
                placeholder="Password"
                value={password}
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="forgot-password">
              <Link to="/forgotpassword">Forgot Password?</Link>
            </div>
            <div className="login-btn">
              <button>Login</button>
            </div>
            <div className="no-account">
              <p>
                Do not have an account yet?{" "}
                <Link to="/signup"> Create Account</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signin;
