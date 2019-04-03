import React, { Component } from "react";
import "./bbb.css"

class Bbb extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  openPage=(pageName,index, color)=> {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    tablinks[index-1].style.backgroundColor = color;
  };

  // Get the element with id="defaultOpen" and click on it
   firstClick = (pageName,index, color) => {
      this.openPage(pageName, index, color);
   };


  render() {
    return (
    <div className="bbbMain" onLoad={(e)=>this.firstClick('Home',1,'gainsboro')}>
      <img className="bbbImg" src="https://eyekandy.com/wp-content/uploads/2018/03/img-empty-960x640.png" alt="Google" />
      <button className="tablink" onClick={(e)=>this.openPage('Home',1,'gainsboro')}>Home</button>
      <button className="tablink" onClick={(e)=>this.openPage('News', 2, 'gainsboro')} >News</button>
      <button className="tablink" onClick={(e)=>this.openPage('Contact', 3, 'gainsboro')}>Contact</button>
      <button className="tablink" onClick={(e)=>this.openPage('About', 4, 'gainsboro')}>About</button>

      <div id="Home" className="tabcontent">
        <h3>שידרוג קורות חיים</h3>
        <p>Home is where the heart is..</p>
      </div>

      <div id="News" className="tabcontent">
        <h3>הכוון תעסוקתי</h3>
        <p>Some news this fine day!</p> 
      </div>

      <div id="Contact" className="tabcontent">
        <h3>הכנה לראיון עבודה</h3>
        <p>Get in touch, or swing by for a cup of coffee.</p>
      </div>

      <div id="About" class="tabcontent">
        <h3>ליוי אישי למציאת עבודה</h3>
        <p>Who we are and what we do.</p>
      </div>
      
    </div>
      
    );
  }
}

export default Bbb;
