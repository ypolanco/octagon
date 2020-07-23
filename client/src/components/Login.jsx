import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

export default class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  // ===============================
  // ========== Handle Change =========
  // ===============================

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, password } = this.state;
    const { handleLoginSubmit, history } = this.props;
    return (
      <div className="login">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleLoginSubmit(this.state);
            history.push("/home");
            this.setState({
              username: "",
              password: "",
            });
          }}
        >
          <h3 className="header">STADIO</h3>
          <label htmlFor="username" className="label">
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            className="input"
          />

          <br />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            className="input"
          />
          <br />
          <button className="button">Login</button>
          <Link to="/register">
            <button className="button">Create Account</button>
          </Link>
        </form>
      </div>
    );
  }
}
