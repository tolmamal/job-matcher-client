import React, {Component} from "react";
import "./UserInstructions.css"

class UserInstructions extends Component {


    render() {
        return (
            <div>
                <div className="instructions-page">
                    <br/>
                    <br/>
                    <h1>Instructions</h1>
                    <br/>
                    <br/>
                    <br/>
                    <p>
                        These instructions are designed to show the functionality of the services we offer in our
                        website.<br/>
                        We hope that it will be very helpful for you.
                    </p>
                    <br/>
                    <br/>
                    <br/>
                    {/*<iframe width="500" height="400" src="https://youtu.be/4r0p3apNaBI">*/}

                    {/*</iframe>*/}
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/4r0p3apNaBI" frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>

                    </iframe>



                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div className="help-section">
                    <p>
                        For any other help, please contact us: &nbsp;
                        <i className="fa fa-envelope-open" aria-hidden="true"></i> &nbsp; jobmatcher100@gmail.com<br/>
                        <br/>All rights reserved. &nbsp;<i className="fa fa-copyright" aria-hidden="true"></i>
                    </p>

                </div>

            </div>
        );
    }
}

export default UserInstructions;
