import React, { Component } from "react";

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="about">
        <h1>About us</h1>
        <br/>
        <div>
          <h2>Founders</h2>
          <br/>
          <strong>Tal Malka </strong> - software engineering student
          <br/>
          <strong>Eden Varsulker </strong> - software engineering student
          <br/>
          <strong>Hanna Yair </strong> - software engineering student
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div>
          <h2>How it all started?</h2>
          <br/>
          In our fourth year of studies, when we were in the process of starting a job search,<br/>
          we were all looking for an easier and more accurate way to search for a suitable position
          for us across the Internet<br/> and when we started thinking about an idea for a final project
          we decided that this is the best way <br/>to make our users more accurate and User and abilities.
          <br/>And so came the idea to build our application.
        </div>

      </div>
    );
  }
}

export default About;
