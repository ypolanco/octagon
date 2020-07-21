import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { signUp, signIn } from '../services/user'


export default function SignUp(props) {
  const [username, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const history = useHistory();


  const resetUser = () => {
    setUserName('')
    setEmail('')
    setPassword('')
    setPasswordConfirmation('')
    setIsError(true)
    setErrorMsg('Sign up details bad bad not good')
  }

  const onChange = event => {
    switch (event.target.name) {
      case 'username':
        setUserName(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      case 'email':
        setEmail(event.target.value);
        break;
      case 'passwordConfirmation':
        setPasswordConfirmation(event.target.value);
        break;
      default:
        break
    }
  }

  const onSignUp = event => {
    event.preventDefault();

    let user = {
      username: username,
      email: email,
      password: password
    }

    signUp(user)
      .then(() => signIn(user))
      .then(res => props.setUserOne(res.user))
      .then(() => history.push('/'))
      .catch(err => {
        console.log(err)
      })
      .finally(() => resetUser())
  }


  return (
    <div>
      <h3>Sign Up</h3>
      {(isError && (<marquee>{errorMsg}</marquee>))}
      <form onSubmit={onSignUp}>
        <label>Username</label>
        <input
          required
          type="text"
          name="username"
          value={username}
          placeholder="Username"
          onChange={onChange}
        />
        <label>Email address</label>
        <input
          required
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={onChange}
        />
        <label>Password</label>
        <input
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={onChange}
        />
        <label>Password Confirmation</label>
        <input
          required
          name="passwordConfirmation"
          value={passwordConfirmation}
          type="password"
          placeholder="Confirm Password"
          onChange={onChange}
        />
        <button type="submit" onClick={onSignUp}>Sign in</button>
      </form>
    </div>
  )
}
