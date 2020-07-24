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
      <div className="login-container">
        <div className='login'>
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
            }}>
            <div className='motha'>
              <h1 className="header">STADIO</h1>
              {/* <label htmlFor="username" className="label">
                Username
              </label> */}
              <input
                id="username"
                type="text"
                name="username"
                placeholder='Email'
                value={username}
                onChange={this.handleChange}
                className="input"
              />
              <br />
              {/* <label htmlFor="password" className="label">
                Password
              </label> */}
              <input
                id="password"
                type="password"
                name="password"
                placeholder='Password'
                value={password}
                onChange={this.handleChange}
                className="input"
              />
              <br />
              <p>or log in with:</p>
              <div className='social'>
                <img src='https://i.imgur.com/22v0su3.png' alt='twitter' />
                <img src='https://i.imgur.com/T46Okmj.png' alt='google' />
                <img src='https://i.imgur.com/dYRamty.png' alt='facebook' />            
              </div>
              <br/>
              <button className="button">Log In</button>
              <p>don't have an account?<Link to="/register">  Sign Up</Link></p>
              
            </div>
          </form>
        </div>
      </div>
    );
  }
}
