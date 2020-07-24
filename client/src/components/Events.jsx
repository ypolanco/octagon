import React from "react";
import { Link } from "react-router-dom";

export default function Events(props) {
  const { events } = props;
  // console.log("HEREEEE", events);

  return (
    <div className='events-container'>
      <div className='row'>
        <h1>STADIO</h1>
        <img src='https://i.imgur.com/dYLT2Ri.png' alt='profile icon' />
      </div>
      {events.map((event) => (
      <div key={event.id}>
        <Link to={`events/${event.id}`}>
          <p>{event.name}</p>
          <p>{event.date}</p>
          <p>{event.time}</p>
          <p>Citi Field</p>
        </Link>
      </div>
      ))}
    </div>
  );
}
