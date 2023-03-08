import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import "./login.css";
import { useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
// import { useLogin } from '../../../hooks/useLogin'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  // const { login, isLoading, error } = useLogin()
  const { user, isFetching, /*error,*/ dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setIsLoading(false);
    // await login(email, password)
    const result = await userLogin(email, password);
    if(result){
        navigate("/home_x");
    }
    
  };

  const userLogin = async (email, password) => {
    try {
      const res = await axios.post(
        `/api/user/login`,
        JSON.stringify({ email, password }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(res.data);
      localStorage.setItem("user", res.data);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
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
      <section class="page-bg">
        <nav>
          <Link to="/">
            <img src="images/logo.png" />
          </Link>
          <div class="tohome">
            <Link to="/">Home</Link>
          </div>
        </nav>

        <h1>Login</h1>

        <div class="log-reg-content">
          <div class="log-reg-row">
            <div class="log-reg-box">
              <img src="images/sl.png" />
            </div>
            <div class="log-reg-box-form">
              <form onSubmit={handleSubmit}>
                <div class="text_field">
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                  />
                  <span></span>
                  <label>Email :</label>
                </div>
                <div class="text_field">
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    required
                  />
                  <span></span>
                  <label>Password :</label>
                </div>
                {/* <button className='submit' disabled={isLoading}>Log in</button> */}
                <button className="submit">Log in</button>
                {error && <div className="error">{errorMessage}</div>}
                <div class="reg-link">
                  Don't have an account? <Link to="/register">Register</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
