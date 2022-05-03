import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbarc from './Bootstrap/Navbar';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Home from "./Components/home"
import Signup from "./Components/signup";
import Login from "./Components/login";
import Contact from "./Components/Contact";
import Aboutus from "./Components/About";
import Icons from "./Bootstrap/Icons";


  class App extends Component {
  render() {
    return (
      <div>
        <Navbarc/>
        <Icons/>
        <Home/>
        <br>
        </br>
        <br>
        </br>
        <Routes>
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<Aboutus />} />
          <Route path="/" element={<Home />} />
        </Routes>

      </div>
    );
      
}
  }
export default App;
