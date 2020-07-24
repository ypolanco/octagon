import React from "react";
import "./Banner.css";
import info from "./bannerimg/info.png";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <div className="info-container">
        <img src={info} alt="info button" className="info-button"/>
        <p>
          <span className="blinking">
              Please keep a safe 6 feet distance from all other attendees
          </span>
        </p>
    </div>
  );
}
