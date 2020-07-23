import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { username, email, password } = this.state;
    return (
      <div className='register-form'>
        <form onSubmit={(e) => { e.preventDefault(); this.props.handleRegister(this.state); this.props.history.push('/'); }}>
          <h3 className='register-title'>Register</h3>
          <div className='row'>
            <div className='form-field'>
              <input
                id="username"
                type="text"
                name="username"
                autoComplete="username"
                placeholder='username'
                value={username}
                onChange={this.handleChange}
              />
            </div>
            <div className='form-field'>
              <input
                id="username"
                type="text"
                name="username"
                autoComplete="username"
                placeholder='username'
                value={username}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='row'>
            <div className='form-field'>
              <input
                id="email"
                type="text"
                name="email"
                autoComplete="email"
                placeholder='email'
                value={email}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='row'>
            <div className='form-field'>
              <input
                id="password"
                type="password"
                name="password"
                autoComplete="off"
                placeholder='password'
                value={password}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className='row'>
            <button className='register-submit'>Submit</button>
          </div>
        </form>
        <div className='row'>
          <p>Already have an account?</p>
          <Link to='/login'>Login</Link>
        </div>
      </div>
    )
  }
}