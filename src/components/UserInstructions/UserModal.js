import React, { Component } from "react";
import "./UserModal.css"


class UserModal extends Component {

    UMOmyBtnFunction=()=> {
        var modal = document.getElementById('UMOmyModal');
        modal.style.display = "block";
    };

    UMOcloseFunction=(e)=> {
        var modal = document.getElementById('UMOmyModal');
        modal.style.display = "none";
    };

    // pusePlsy=(e)=>{
    //     var myVideo = document.getElementById("video1");
    //     if (myVideo.paused)
    //         myVideo.play();
    //     else
    //         myVideo.pause();
    // }

    render() {
        return (
            <div>
                <button id="UMOmyBtn" onClick={(e)=>this.UMOmyBtnFunction()}>Open Modal</button>

                <div id="UMOmyModal" className="UMOmodal">

                    <div className="UMOmodal-content">
                        <span onClick={(e)=>this.UMOcloseFunction()} className="UMOclose">&times;</span>
                        {/*<button onClick={(e)=>this.pusePlsy(e)}>Play/Pause</button>*/}
                        <br/>
                        <video width="800px" controls>
                            <source src="https://www.youtube.com/watch?v=EdfatkbDL-o" type="video/mp4"/>
                            <source src="https://www.youtube.com/watch?v=EdfatkbDL-o" type="video/ogg"/>
                            Your browser does not support HTML5 video.
                        </video>
                        {/*<video id="video1" width="420">*/}
                        {/*    <source src="https://youtu.be/2nO48zhNTYo" type="video/mp4"/>*/}
                        {/*    <source src="https://youtu.be/2nO48zhNTYo" type="video/ogg"/>*/}
                        {/*    Your browser does not support HTML5 video.*/}
                        {/*</video>*/}
                    </div>

                </div>
            </div>
        );
    }
}

export default UserModal;
