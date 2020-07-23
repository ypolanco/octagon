import React from "react";
import qr from "../images/qrcode.jpg";
import Banner from "../components/banner/Banner";
import "./Qr.css";
import { Link } from "react-router-dom";

export default function Qr(props) {
  const { events } = props;
  console.log(events);
  return (
    <div>
      <div className="qr-container">
        <Banner />
        <div className="code">
          <h1>Scan this QR code</h1>
            <Link to={`/success/${events.id}`}>
              <img src={qr} alt="qr code" className="qr-code" />
            </Link>
        </div>
      </div>
    </div>
  );
}
