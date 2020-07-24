import React from "react";
import qr from "../images/qrcode.jpg";
import Banner from "../components/banner/Banner";
import "./Qr.css";
import { Link } from "react-router-dom";

export default function Qr(props) {
  const { events } = props;
  console.log(events);
  return (
      <div className="qr-container">
      <Banner />
      <div className="arrow">
        <Link to='/home'><img className='back-arrow' src='https://i.imgur.com/x60pPmo.png' alt='back arrow'/></Link>
      </div>
      <div className="code">
        <h1>Scan this QR code</h1>
        <Link to={`/success/${events.id}`}>
          <img src={qr} alt="qr code" className="qr-code" height='330px' width='330px' />
        </Link>
      </div>
    </div>
  );
}
