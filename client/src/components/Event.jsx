import React, { Component } from "react";
import Banner from "./banner/Banner";
import { getOneEvent } from "../services/events";
import { Link } from "react-router-dom";

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
        <div>
          <p>{event.name}</p>
          <p>{event.date}</p>
          <p>{event.time}</p>
          <p>Citi Field</p>
          <p>{event.section}</p>
          <p>{event.row}</p>
          <p>{event.seat}</p>
          <p>
            Witness the playoff showdown between the New York Giants and the New
            England Patriots. It’s one of the most highly anticipated games of
            the year!
          </p>
          <Link to={`/steps`}>
            <button className="button">Check In</button>
          </Link>
        </div>
      </div>
    );
  }
}
