import React, { Component } from "react";
//import "./About.css";
import Header from "./Header";
import Footer from "./Fotter";
import Div from "./Div";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Div />
        <Footer/>
      </div>
    );
  }
}

export default Home;
