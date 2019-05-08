import React, {
    Component
} from "react";
import "./ProfileCard.css"
import DetailsForm from "../DetailsForm/DetailsForm";
import axiosInstance from "../../utils/axios";

class ProfileCard extends Component {


    constructor(props) {
        super(props);
        console.log(props.push)
        this.state = {
            first_name: "",
            last_name: "",
            cards_amount:"",
            cards: []
        };
    };

    componentWillMount = async () => {
        const response = await axiosInstance.get(`/user/${this.props.match.params.id}/changeProfile`);
        // console.log(response.data[0]);
        const {state} = this;
        this.setState({first_name:response.data[0]});
        this.setState({last_name:response.data[1]});
        this.setState({cards_amount:response.data[3]});
        this.setState({cards: response.data[4]});

        // console.log("cards_amount: ", this.state.cards_amount);
        // console.log("cards: ", this.state.cards);


    }

    btnOnClick=(e)=>{
        var modal = document.getElementById("myModal");
        modal.style.display ="block";
    };

    spanOnClick=(e)=>{
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
    };




    loadCard = async (e) => {
        console.log("--- loadCard(e) ---");

        // TODO: split the msg with whitespace for display !!!
        const response = await axiosInstance.post(`/user/${this.props.match.params.id}/recommendation`);




        let lines = document.getElementsByClassName("cards-container")[0];

        for(let i=0; i < this.state.cards_amount; i++)
        {

            let card = document.createElement("div");
            card.className="card";
            let line = document.createElement("h3");
            line.className="title";
            let title = document.createTextNode(this.state.cards[i]);
            line.appendChild(title);
            card.appendChild(line);

            let bar = document.createElement("div");
            bar.className = "bar";
            let emptyBar = document.createElement("div");
            emptyBar.className = "emptybar";
            let filledBar = document.createElement("div");
            filledBar.className = "filledbar";

            bar.appendChild(emptyBar);
            bar.appendChild(filledBar);
            card.appendChild(bar);

            let input = document.createElement("div");
            input.className = "input";


            let msg = document.createTextNode(response.data[this.state.cards[i]]);

            input.appendChild(msg);
            card.appendChild(input);


            lines.appendChild(card);
            // console.log("lines: " , lines);

        }



    };

    render() {
        const { first_name,last_name,cards_amount , cards} = this.state;
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

                <div id="user-recommend">
                    <button id="rec-btn" onClick={(e) => this.loadCard(e)}><strong>View your recommendations</strong></button>
                </div>
                <div className="cards-container">

                </div>

            </div>

        );

    }
}

export default ProfileCard;
