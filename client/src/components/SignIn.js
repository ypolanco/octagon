import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class SignIn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }
 

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  }

  render() {
    const { username, password } = this.state;
    console.log(this.state.username);
    return (
      <div className='login-container'>
        <div className='login-form'>
          <form onSubmit={(e) => {
            e.preventDefault();
            this.props.handleLogin(this.state);
            this.props.history.push(`/`);
          }}>
            <h1 className='login-title'>STADIO</h1>
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
                id="password"
                type="password"
                name="password"
                autoComplete="off"
                placeholder='password'
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <div className='social-icons'>
              <p>or login with:</p>
              <div className="row">
                <div className='column'><img src='https://i.imgur.com/22v0su3.png' alt='twitter' /></div>
                <div className='column'><img src='https://i.imgur.com/T46Okmj.png' alt='google' /></div>
                <div className='column'><img src='https://i.imgur.com/dYRamty.png' alt='facebook' /></div>
              </div>
            </div>
            <button className='login-submit'>Log In</button>
            <div className='row'>
              <p>Don't have an account, yet?
                <Link to='/register'><span id='join-link'>Join Now</span></Link>
              </p>
            </div>  
          </form>
        </div>
      </div>
    )
  }
}
