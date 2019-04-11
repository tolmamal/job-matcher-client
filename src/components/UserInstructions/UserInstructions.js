import React, { Component } from "react";
import "./UserInstructions.css"
import Header from "../Header/Header";
import Footer from "../Instructions/Fotter";
import UserModal from "./UserModal";


class UserInstructions extends Component {

    ssssshowClick=(e)=>{
        var video=document.getElementsByClassName("UIdiv")[0];
        video.style.display="block";

    };

    render() {
        return (
            <div>
                <Header/>
                <div>
                    <h2>Instructions:</h2>
                    {/*<button onClick={(e)=>this.ssssshowClick(e)}>Show</button>*/}
                    <div className="UIdiv">
                        {/*<a href="https://www.youtube.com/watch?v=lm3REFytTHQ" rel="external" target="_blank">jhgfs*/}
                        {/*</a>*/}
                        {/*<video>*/}
                        {/*    <source src={"https://youtu.be/2nO48zhNTYo"}/>*/}
                        {/*</video>*/}

                    </div>
                    <UserModal/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default UserInstructions;
