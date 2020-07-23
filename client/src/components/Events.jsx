import React from "react";
import { Link } from "react-router-dom";

export default function Events(props) {
  const { events } = props;
  // console.log("HEREEEE", events);

  return (
    <div>
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
