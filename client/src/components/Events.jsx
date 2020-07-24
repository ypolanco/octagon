import React from "react";
import { Link } from "react-router-dom";
import Banner from './banner/Banner';
import Footer from "./Footer"

export default function Events(props) {
  const { events } = props;
  // console.log("HEREEEE", events);

  return (
    <>
    <Banner />
    <div className='events-container'>
      <div className='row'>
        <span><h1>STADIO</h1></span>
        <img src='https://i.imgur.com/dYLT2Ri.png' alt='profile icon' />
      </div>
      <div className='my-events-container'>
        <p>My Events</p>
      </div>
      {events.map((event) => (
      <div className='act-event' key={event.id}>
        <Link to={`events/${event.id}`} style={{ textDecoration: 'none' }}>
          <div className='event-name'>
            <h2>{event.name}</h2>
          </div>
          <div>
            <p className='time'>{event.time}</p>
            <p className='date'>{event.date}</p>
          </div>
          <div>
            <p className='venue'>Citi Field</p>
          </div>
          <div>
            <button>Check In</button>
          </div>
        </Link>
      </div>
      ))}
      </div>
    </>
  );
}
