import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Fotter";
import Body from "../Home/Body";
import Bbb from "../Bbb/bbb"
import SlideShow from "../SlideShow/SlideShow"

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <Header />
        <Body />
        <SlideShow/>
        <Bbb/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
