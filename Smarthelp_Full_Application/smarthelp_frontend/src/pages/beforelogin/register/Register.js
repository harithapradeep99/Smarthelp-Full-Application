import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import { useState } from "react";
import { useSignup } from "../../../hooks/useSignup";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
import axios from "axios";

const Register = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [password, setPassword] = useState("");
  //   const { signup, isLoading, error } = useSignup();

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // const { login, isLoading, error } = useLogin()
  const { user, isFetching, /*error,*/ dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let username = fname + " " + lname;
    // await signup(fname, lname, email, phonenumber, password, username)
    const data = {
      fname: fname,
      lname: lname,
      email: email,
      phonenumber: phonenumber,
      password: password,
      username: username,
    };
    const result = await userRegister(data);
    if (result) {
      navigate("/login");
    }
  };

  const userRegister = async (data) => {
    try {
      const res = await axios.post(`/api/user/signup`, data, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(res.data);
      //   localStorage.setItem("user", res.data);
      //   dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      setIsLoading(false);
      return true;
    } catch (error) {
      console.log("error", error);
      setError(true);
      setErrorMessage(error.response.data.error);
      return false;
    }

    // setUser(res.data);
  };

  return (
    <div>
      <section className="page-bg">
        <nav>
          <Link to="/">
            <img src="images/logo.png" />
          </Link>
          <div className="tohome">
            <Link to="/">Home</Link>
          </div>
        </nav>

        <h1>Register</h1>

        <div className="log-reg-content">
          <div className="log-reg-row">
            <div className="log-reg-box">
              <img src="images/sl.png" />
            </div>
            <div className="log-reg-box-form">
              <form onSubmit={handleSubmit}>
                <div className="text_field">
                  <input
                    type="text"
                    onChange={(e) => setFname(e.target.value)}
                    value={fname}
                    required
                  />
                  <span></span>
                  <label>First Name :</label>
                </div>
                <div className="text_field">
                  <input
                    type="text"
                    onChange={(e) => setLname(e.target.value)}
                    value={lname}
                    required
                  />
                  <span></span>
                  <label>Last Name :</label>
                </div>
                <div className="text_field">
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                  <span></span>
                  <label>Email :</label>
                </div>
                <div className="text_field">
                  <input
                    type="text"
                    onChange={(e) => setPhonenumber(e.target.value)}
                    value={phonenumber}
                    required
                  />
                  <span></span>
                  <label>Contact Number :</label>
                </div>
                <div className="text_field">
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                  <span></span>
                  <label>Password :</label>
                </div>
                {/* <div className="text_field">
                            <input
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    value={password}
                                />
                                <span></span>
                                <label>Confirm Password :</label>
                            </div> */}
                {/* <button className="submit" disabled={isLoading}>
                  Register
                </button> */}
                <button className="submit">Register</button>
                {error && <div className="error">{errorMessage}</div>}
                <div className="login-link">
                  Already a member ? <Link to="/login">Login</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
