import React, { Component } from "react";
import { getAllEvents } from "../services/events";
import { Route } from "react-router-dom";
import Events from "./Events";
import Event from "./Event";
import Steps from "./Steps.jsx";
import Qr from "./Qr.jsx";
import Success from "./Success.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Footer from "./Footer";

export default class Main extends Component {
  state = {
    events: [],
  };

  async componentDidMount() {
    const events = await getAllEvents();
    this.setState({ events });
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/home"
          render={(props) => <Events {...props} events={this.state.events} />}
        ></Route>
        <Route
          exact
          path="/events/:id"
          render={(props) => <Event {...props} events={this.state.events} />}
        ></Route>
        <Route exact path="/steps/" render={Steps}></Route>
        <Route
          exact
          path="/qr"
          render={(props) => <Qr {...props} events={this.state.events} />}
        ></Route>
        <Route
          exact
          path="/success/:id"
          render={(props) => <Success {...props} events={this.state.events} />}
        ></Route>
        <Route
          exact
          path="/"
          render={(props) => (
            <Login
              {...props}
              handleLoginSubmit={this.props.handleLoginSubmit}
            />
          )}
        />
        <Route
          path="/register"
          render={(props) => (
            <Register
              {...props}
              handleRegisterSubmit={this.props.handleRegisterSubmit}
            />
          )}
        />
        <Footer />
      </div>
    );
  }
}
