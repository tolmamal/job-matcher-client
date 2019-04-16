import React, {
    Component
} from "react";
import "./ProfileCard.css"
import DetailsForm from "../DetailsForm/DetailsForm";
import TryUpdateForm from '../TryUpdateForm/TryUpdateForm'

class ProfileCard extends Component {

    name="Jone Deo";

    btnOnClick=(e)=>{
        var modal = document.getElementById("myModal");
        modal.style.display ="block";
    };

    spanOnClick=(e)=>{
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    };

    render() {
        return (
            <div>
                <div className="PCMain">
                    <h2 className="PCh2">hello {this.name}:</h2>

                    <div className="PCcard">
                        <img className="PCImg" src="https://avatars2.githubusercontent.com/u/45991976?s=460&v=4" alt="John"/>
                        <p className="PCtitle"><h2>{this.name}</h2></p>
                        <p>
                            <button id="myBtn" className="PCbutton" onClick={(e)=>this.btnOnClick(100)}>update details</button>
                        </p>
                    </div>
                </div>

                <div id="myModal" className="PCmodal">
                    <div className="PCmodal-content">
                        <span className="PCclose" onClick={(e)=>this.spanOnClick(100)}>&times;</span>
                        {/*<p>Profile details:</p>*/}
                        <DetailsForm/>
                    </div>

                </div>
            </div>

        );

    }
}

export default ProfileCard;
