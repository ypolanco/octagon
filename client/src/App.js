import React, { Component } from 'react'
import { withRouter } from 'react-router';
import './App.css'

import Header from './components/Header';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import { loginUser, registerUser, verifyUser, removeToken } from './services/auth.js';

class App extends Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    this.confirmUser();
  }

  handleLogin = async (loginData) => {
    const currentUser = await loginUser(loginData);
    this.setState({ currentUser })
  }

  handleRegister = async (registerData) => {
    const currentUser = await registerUser(registerData);
    this.setState({ currentUser })
  }

  confirmUser = async () => {
    const currentUser = await verifyUser();
    this.setState({ currentUser })
  }

  handleLogout = () => {
    localStorage.clear();
    this.setState({
      currentUser: null
    })
    removeToken();
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="App">
        <Header handleLogout={this.handleLogout} currentUser={this.state.currentUser} />
        {/* <SignIn handleRegister={this.handleRegister} handleLogin={this.handleLogin} currentUser={this.state.currentUser} /> */}
        {/* <SignUp /> */}
        <Footer />
      </div>
    )
  }
}

export default withRouter(App);