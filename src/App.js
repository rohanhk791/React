import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import './App.css';
import Navbarc from "./Bootstrap/Navbar";
import Home from "./Components/home"
import Signup from "./Components/signup";
import Login from "./Components/login";
import Contact from "./Components/Contact";
import Aboutus from "./Components/About";
import Icons from "./Bootstrap/Icons";
import State from "./Components/State";

  class App extends Component {
  render() {
    return (
      <div>
        <Navbarc name="rohan"/>
    
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
