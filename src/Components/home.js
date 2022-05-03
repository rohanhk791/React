import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
        <div>
        <h1>This is the home page</h1>
        <Link to="signup">Signup page</Link>
        <br></br>
        <Link to="login">Login page</Link>
        <br></br>
        <Link to="contact">Contact page</Link>
        <br></br>
        <Link to="about">About us page</Link>
        <br></br>
      </div>
    );
  }
}

export default Home;