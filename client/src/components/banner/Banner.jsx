import React from "react";
import "./Banner.css";
import info from "./bannerimg/info.png";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <Link
      to=""
      target="_blank"
    >
      <div className="info-container">
        <img src={info} alt="info button" className="info-button" />
        <span className="blinking">
          Please keep a safe 6 feet distance from all other attendees
        </span>
      </div>
    </Link>
  );
}
