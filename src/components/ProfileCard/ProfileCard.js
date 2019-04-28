import React, {
    Component
} from "react";
import "./ProfileCard.css"
import DetailsForm from "../DetailsForm/DetailsForm";
import axiosInstance from "../../utils/axios";

class ProfileCard extends Component {


    constructor(props) {
        super(props);
        this.state = {
            first_name: "",
            last_name: ""
        };
    };

    componentDidMount = async () => {
        const response = await axiosInstance.get(`/user/${this.props.match.params.id}/changeProfile`);
        // console.log(response.data[0]);
        this.setState({first_name:response.data[0]});
        this.setState({last_name:response.data[1]});
    }

    btnOnClick=(e)=>{
        var modal = document.getElementById("myModal");
        modal.style.display ="block";
    };

    spanOnClick=(e)=>{
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    };

    render() {
        {this.componentDidMount()}
        const { first_name,last_name} = this.state;
        // console.log("ProfileCard:  "+ this.props);

        return (
            <div>
                <div className="PCMain">
                    <h2 className="PCh2">hello {first_name}  {last_name} :</h2>

                    <div className="PCcard">
                        <img className="PCImg" src="https://avatars2.githubusercontent.com/u/45991976?s=460&v=4" alt={first_name}/>
                        <p className="PCtitle"><h2>{first_name}  {last_name} </h2></p>
                        <p>
                            <button id="myBtn" className="PCbutton" onClick={(e)=>this.btnOnClick(100)}>update details</button>
                        </p>
                    </div>
                </div>

                <div id="myModal" className="PCmodal">
                    <div className="PCmodal-content">
                        <span className="PCclose" onClick={(e)=>this.spanOnClick(100)}>&times;</span>
                        {/*<p>Profile details:</p>*/}
                        <DetailsForm {...this.props}/>
                    </div>

                </div>
            </div>

        );

    }
}

export default ProfileCard;
