import React, { useState } from "react";
import "./SignIn.css";
import { useHistory } from "react-router-dom";
import { signIn, verifyUser } from "../services/user";

function SignIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const history = useHistory();

  const resetUser = () => {
    setUsername("");
    setPassword("");
    setIsError(false);
    setErrorMsg("Invalid Credentials");
  };

  const handleChange = (event) => {
    switch (event.target.name) {
      case "username":
        setUsername(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "isError":
        isError(false);
        break;
      case "errorMsg":
        errorMsg("");
        break;
      default:
        break;
    }
  };

  const onSignIn = (event) => {
    event.preventDefault();

    let user = {
      username: username,
      password: password,
    };

    signIn(user)
      .then((res) => props.setUserOne(res.user))
      .then((res) => verifyUser(res.user))
      .then(() => history.push("/"))
      .catch((error) => {
        console.error(error);
        resetUser();
      });
  };

  return (
    <div className="form-container">
      <h3>Sign In</h3>
      <form onSubmit={onSignIn}>
        <label>Username</label>
        <input
          required
          type="text"
          name="username"
          value={username}
          placeholder="Enter Username"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={handleChange}
        />
      </form>
      <button type="submit" onClick={onSignIn}>Sign in</button>
    </div>
  );
}
export default SignIn;
