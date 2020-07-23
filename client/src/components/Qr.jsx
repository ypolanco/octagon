import React from "react";
import qr from "../images/qrcode.jpg";
import Banner from "../components/banner/Banner";
import "./Qr.css";

export default function Qr() {
  return (
    <div>
      <div className="qr-container">
        <Banner />
        <div className="code">
          <h1>Scan this QR code</h1>
          <img src={qr} alt="qr code" className="qr-code" />
        </div>
      </div>
    </div>
  );
}
