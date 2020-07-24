import React, { Component } from "react";
import Banner from "./banner/Banner";
import { getOneEvent } from "../services/events";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default class Event extends Component {
  state = {
    event: {
      name: "",
      date: "",
      time: "",
      section: "",
      row: "",
      seat: "",
    },
  };

  async componentDidMount() {
    let { id } = this.props.match.params;
    const event = await getOneEvent(id);
    this.setState({ event });
  }

  render() {
    const { event } = this.state;

    return (
      <div>
        <Banner />
        <div className='single-event-container'>
          <div className='single-event'>
            <div className='info-board-1'>
              <Link to='/home'><img className='back-arrow' src='https://i.imgur.com/x60pPmo.png' alt='back arrow'/></Link>
              <h2>{event.name}</h2>
              <p>{event.date}</p>
              <p>{event.time}</p>
              <p>Citi Field</p>
            </div>
            <div className='info-board-2'>
              <p>Section {event.section}</p>
              <p>Row {event.row}</p>
              <p>Seat {event.seat}</p>
            </div>
          </div>
          <div>
            <p>
              Witness the playoff showdown between the New York Giants and the New
              England Patriots. It’s one of the most highly anticipated games of
              the year!
            </p>
            <Link to={`/steps`}>
              <button className="button">Check In</button>
            </Link>
            <Footer />
          </div>
        </div>  
      </div>
    );
  }
}
