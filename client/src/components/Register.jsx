import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { username, email, password } = this.state;
    const { handleRegisterSubmit, history } = this.props;
    return (
      <div className='register-container'>
        <div className="register">
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleRegisterSubmit(this.state);
              history.push("/");
              this.setState({
                username: "",
                email: "",
                password: "",
              });
            }}>
            <div className='subform'>
              {/* <h3 className="header">Register</h3> */}
            <h1 className='header'>STADIO</h1>
            <label htmlFor="username" className="label">
              {/* Username */}
            </label>

            <input
              className="register-input"
              id="username"
              type="text"
              name="username"
              placeholder='Username'
              value={username}
              onChange={this.handleChange}
            />

            <br />
            <label htmlFor="email" className="label">
              {/* Email */}
            </label>

            <input
              className="register-input"
              id="email"
              type="text"
              name="email"
              placeholder='Email'
              value={email}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="password" className="label-register">
              {/* Password */}
            </label>
            <input
              className="register-input"
              id="password"
              type="password"
              name="password"
              placeholder='Password'
              value={password}
              onChange={this.handleChange}
            />
            <br />
            <button className="button">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
