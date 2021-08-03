import { useRef } from "react";
import "./register.css";
import axios from "axios";
import { useHistory } from "react-router";

export default function Register() {
  const username = useRef();
  const email = useRef();

  const password = useRef();
  const passwordAgain = useRef();
  const history = useHistory();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("passwords  not match");
    } else {
      const user = {
        username: username.current.value,
        email: username.current.value,

        password: username.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">social</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on social.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              minLength="6"
              type="password"
              className="loginInput"
            />
            <input
              placeholder="Password Again"
              ref={passwordAgain}
              className="loginInput"
              type="password"
              required
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
