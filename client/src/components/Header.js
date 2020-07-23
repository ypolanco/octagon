import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <>
    <div className='covid_message'>
      <img src='https://i.imgur.com/DHscJac.png' alt='info icon'/>
      <p>Please keep a safe distance of 6 feet from all other attendees</p>
    </div>
    {/* <header>
      {
        props.currentUser
          ?
          <Link id='header-icon' to='/user'><h1>Stadio</h1></Link>
          :
          <Link id='header-icon' to='/'><h1>Stadio</h1></Link>
      }
      {
        props.currentUser
          ?
          <>
            <Link className='sign-in-out-up' onClick={props.handleLogout} to="/">Logout</Link>
          </>
          :
          <Link className='sign-in-out-up' to="/login">Login/Register</Link>
      }
      {
        props.currentUser
        &&
        <div className='list-links'>
          <Link to='/user/1'>Past</Link>
          <Link to='/user/2'>Present</Link>
          <Link to='/user/3'>Future</Link>
        </div>
      }
    </header> */}
    </>
  )
}
