import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";
import { CircularProgress } from "@material-ui/core";
export default function Login() {
  const email = useRef();
  const password = useRef();

  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on social.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Email"
              type="email"
              minLength="6"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton">
              {isFetching ? (
                <CircularProgress color="white" size="15px" />
              ) : (
                "log in"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="white" size="15px" />
              ) : (
                "Create New Account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
