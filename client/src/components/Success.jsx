import React, { Component } from "react";
import Banner from "./banner/Banner";
import { getOneEvent } from "../services/events";

export default class Success extends Component {
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
    console.log("IDIDIDI", this.props.match.params);
    const event = await getOneEvent(id);
    this.setState({ event });
  }

  render() {
    const { event } = this.state;
    console.log("here here",this.state.event);
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

          <h3>You are checked in! </h3>
          <p>
            Witness the playoff showdown between the New York Giants and the New
            England Patriots. It’s one of the most highly anticipated games of
            the year!
          </p>
        </div>
      </div>
    );
  }
}
