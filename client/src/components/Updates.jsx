import React from "react";
import "./Updates.css";
import Banner from "./banner/Banner";

export default function updates() {
  return (
    <div className="updates-container">
      <input type="text" className="input-search" placeholder="search" />
      <div className="header">
        <h2>Browse our COVID-19 updates</h2>
        <h4>Your health is our main concern!</h4>
      </div>
      <div className="body">
        <hr />
        <p>All of our staff undergo daily temperature checks.</p>
        <hr />
        <p>Our restrooms are sanitized every 3-4 hours.</p>
        <hr />
        <p>
          Please wash your hands often with soap and water for at least 20
          seconds.
        </p>
        <hr />
        <p>Please use our sanitizer stations available throughout the venue.</p>
        <hr />
        <p>Keep your mask on as much as possible during the show.</p>
        <hr />
        <p>Please keep a safe 6 feet distance from all other attendees.</p>
        <hr />
        <p>
          Cover your mouth and nose with a cloth face cover when around others.
        </p>
        <hr />
      </div>
    </div>
  );
}
