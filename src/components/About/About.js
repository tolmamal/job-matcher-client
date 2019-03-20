import React, { Component } from "react";
//import "./About.css";
import Header from "./Header";
import Footer from "./Fotter";
import Body from "./Body";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Body />
        <Footer/>
      </div>
    );
  }
}

export default About;
