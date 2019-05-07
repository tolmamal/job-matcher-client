import React, { Component } from "react";
import Header from "../Header/Header";
import Footer from "./Fotter";
import Body from "../Home/Body";
import Bbb from "../Bbb/bbb"
import SlideShow from "../SlideShow/SlideShow"
import HomeDesign from "../../components/HomeDesign/HomeDesign";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }


  //TODO: need to separate to 2 sections instead of home-design div & create component?
  render() {
    return (
        <HomeDesign/>



    );
  }
}

export default Home;
