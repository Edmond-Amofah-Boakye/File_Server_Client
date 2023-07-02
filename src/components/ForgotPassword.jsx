import { useState } from "react";
import { ImNotification } from "react-icons/im";
import { BiArrowBack } from "react-icons/bi";
import swal from "sweetalert2";
import server from "./Helpers/Server";
import "../styles/ForgotPassword.css";
import axios from "axios";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const data = {
    email,
  };
  //handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${server}/auth/password/forgot`, data, { withCredentials: true })
      .then((res) => {
        swal.fire({
          icon: "success",
          title: `${res.data.message}`,
        });
        setEmail("");
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
      <div className="forgot-wrapper">
        <div className="header-color"></div>
        <div className="forgot-form-wrapper">
          <div className="forgot-icon">
            <ImNotification className="forgot-ic" />
          </div>
          <form onSubmit={handleSubmit}>
            <h3>Forgot Password</h3>
            <p>
              Enter your email and we will send you a link to reset your
              password
            </p>
            <div className="email-input">
              <input
                type="email"
                placeholder="Enter Email Address"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="forgot-btn">
              <button>Submit</button>
            </div>
          </form>
          <div className="back-toLogin">
            <BiArrowBack />
            <a href="/signin">Back to login</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
