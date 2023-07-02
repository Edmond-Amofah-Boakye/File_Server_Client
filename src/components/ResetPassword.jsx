import "../styles/ResetPassword.css";
import server from "./Helpers/Server";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import { useState } from "react";

const ResetPassword = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const data = {
    password,
  };
  //handle submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return swal.fire({
        icon: "error",
        text: "password mismatch",
      });
    }
    axios
      .post(`${server}/auth/password/reset/${params.token}`, data, {
        withCredentials: true,
      })
      .then((res) => {
        swal.fire({
          icon: "success",
          title: `${res.data.message}`,
        });
        setPassword("");
        setConfirmPassword("");
        navigate("/signin");
      })
      .catch((error) => {
        swal.fire({
          icon: "error",
          title: `${error.response.data.message}`,
        });
        navigate("/forgotpassword");
        console.log(error);
      });
  };

  return (
    <>
      <div className="reset-wrapper">
        <div>
          <div className="signup-form-wrapper">
            <form onSubmit={handleSubmit}>
              <h4>Password Reset</h4>
              <h3 className="password-heading">New Password</h3>
              <div className="password-input">
                <input
                  type="password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <h3 className="password-heading">Repeat Password</h3>
              <div className="password-input">
                <input
                  type="password"
                  required
                  minLength={6}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="login-btn">
                <button>Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
