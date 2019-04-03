import React, { Component } from "react";
import "./Home.css";



class Body extends Component {


  render() {
    return (
      <div className="body">
        <div className="div">Home</div>
        <p className="pp" >Career and recruitment world</p>
         <table className="table">
            <tr className="tr">
              <td className="td">
              <div className="divImg">
                <p>Ynet</p>
                  <a href="https://www.ynet.co.il/articles/0,7340,L-4976305,00.html">
                      <img className="Img" src="https://images1-ynet-prod.azureedge.net//PicServer4/2015/10/22/6574184/65741110100791640360no.jpg" alt="Ynet"></img>
                  </a>
              </div>
              </td>
              <td className="td">
              <div className="divImg">
                <p>Walla</p>
                  <a href="https://career.walla.co.il/item/3214230">
                      <img className="Img" src="https://img.wcdn.co.il/f_auto,w_1000/2/5/5/7/2557301-46.jpg"  alt="walla"></img>
                  </a>
              </div>
              </td>
              <td className="td">
              <div className="divImg">
                <p>Globes</p>
                  <a href="https://www.globes.co.il/news/%D7%92%D7%99%D7%95%D7%A1_%D7%A2%D7%95%D7%91%D7%93%D7%99%D7%9D.tag">
                      <img className="Img" src="https://images.globes.co.il/images/NewGlobes/big_image_800/2018/lightricks04800x392.20181202T152533.jpg" alt="globes"></img>
                  </a>
              </div>
              </td>
            </tr>
        </table>
      </div>
          
    );
  }
}

export default Body;
