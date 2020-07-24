import React, { Component } from "react";
import { Link } from "react-router-dom";


export default class Register extends Component {
  state = {
    firstname: "",
    lastname: "",
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
    const { firstname, lastname, email, password } = this.state;
    const { handleRegisterSubmit, history } = this.props;
    return (
      <div className='login-container'>
        <div className="login">
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              handleRegisterSubmit(this.state);
              history.push("/");
              this.setState({
                firstname: "",
                lastname: "",
                email: "",
                password: "",
              });
            }}>
            <h3 className="header">Register</h3>
            <div className='row'>
              <input
                className="register-input"
                id="firstname"
                type="text"
                name="firstname"
                placeholder='First Name'
                value={firstname}
                onChange={this.handleChange}
              />
              <input
                className="register-input"
                id="lastname"
                type="text"
                name="lastname"
                placeholder='Last Name'
                value={lastname}
                onChange={this.handleChange}
              />
            </div>
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
            <button className="button">Create Account</button>
          </form>
        </div>
      </div>
    );
  }
}
