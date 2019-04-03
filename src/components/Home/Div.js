import React, { Component } from "react";
import "./Home.css";


class Div extends Component {

  render() {
    return (
      <body className="body">
        <div className="div">Home</div>
        <p className="pp" >Career and recruitment world</p>
         <table className="table">
            <tr className="tr">
              <td className="td">
              <p>Ynet</p>
                <a href="https://www.ynet.co.il/articles/0,7340,L-4976305,00.html">
                    <img src="https://images1-ynet-prod.azureedge.net//PicServer4/2015/10/22/6574184/65741110100791640360no.jpg"></img>
                </a>
              </td>
              <td className="td">
              <p>Walla</p>
                <a href="https://www.ynet.co.il/articles/0,7340,L-4976305,00.html">
                    <img src="https://images1-ynet-prod.azureedge.net//PicServer4/2015/10/22/6574184/65741110100791640360no.jpg"></img>
                </a>
              </td>
            </tr>
            <tr>
              <td>row 2, cell 1</td>
              <td>row 2, cell 2</td>
            </tr>
         </table>
          
      
      </body>
    );
  }
}

export default Div;
